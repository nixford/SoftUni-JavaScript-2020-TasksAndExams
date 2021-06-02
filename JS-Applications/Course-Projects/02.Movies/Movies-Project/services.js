const apiKey = 'AIzaSyDuIoJstS-cz6VnpUD6PT0-Q6uhxij9MSc';
const databaseUrl = `https://movies-60361-default-rtdb.europe-west1.firebasedatabase.app`;

const request = async (url, method, body) => {
   let options = {
    method,      
  };

  if (body) {
    Object.assign(options, {
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(body)
    });
  }

  let response = await fetch(url, options);

  let data = await response.json();

  return data;
}

// ASYNC FUNCTION
const authService = {
  async login(email, password) {
    let respose = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ // wrap/serialize the object with JSON.stringify
        email,
        password,
        returnSecureToken: true,
      })
    });
    let data = await respose.json();
    // We have to save idToken in order to have auhorized requests to the server (in order not to login every time)
    // therefore we save them locally with localStorage
    localStorage.setItem('auth', JSON.stringify(data)); 
    // In localStorage we cannot save objects - thr must be serializt with JSON.stringify(data)

    return data;
  },

  async register(email, password) {
    let respose = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ // wrap/serialize the object with JSON.stringify
        email,
        password,
        returnSecureToken: true,
      })
    });
    let data = await respose.json();
    localStorage.setItem('auth', JSON.stringify(data)); 
    return data;
  },

  getData() {
    try {

      let data = JSON.parse(localStorage.getItem('auth'));
      return {
          isAuthenticated: Boolean(data.idToken),
          email: data.email || ''
      };

    } catch (error) {

      return {
        isAuthenticated: false,
        email: ''
    };
    }
  },
  
  logout() {
    localStorage.setItem('auth', '');
  }
};

// NOT ASYNC FUNCTION
// const authService = {
//   login(email, password) {
//     fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
//       method: 'POST',
//       headers: {
//         'content-type': 'application/json',
//       },
//       body: JSON.stringify({ // wrap/serialize the object with JSON.stringify
//         email,
//         password,
//       })
//     })
//     .then(res => res.json())
//     .then(data => {
//       // We have to save idToken in order to have auhorized requests to the server (in order not to login every time)
//       // therefore we save them locally with localStorage

//       console.log(`DEBUG service.js: data: ${JSON.stringify(data)}`);

//       localStorage.setItem('auth', JSON.stringify(data)); 
//       // In localStorage we cannot save objects - thr must be serializt with JSON.stringify(data)
//     })
//   }
// }

const movieService = {
  async add(movieData) {
    let res = await request(`${databaseUrl}/movies.json`, 'POST', movieData);
    return res;
  },

  async getAll() {
    let res = await request(`${databaseUrl}/movies.json`, 'GET');
    // ({key, ...res[key]})
    // Object.assign(res[key], {key})
    return Object.keys(res).map(key => ({key, ...res[key]}));
  },
  async getOne(id) {
    let res = await request(`${databaseUrl}/movies/${id}.json`, 'GET');
    return res;
  }
}