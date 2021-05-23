const apiKey = 'AIzaSyDuIoJstS-cz6VnpUD6PT0-Q6uhxij9MSc';

const authService = {
  login(email, password) {
    fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ // wrap/serialize the object with JSON.stringify
        email,
        password,
      })
    })
    .then(res => res.json())
    .then(data => {
      // We have to save idToken in order to have auhorized requests to the server (in order not to login every time)
      // therefore we save them locally with localStorage
      localStorage.setItem('auth', JSON.stringify(data)); 
      // In localStorage we cannot save objects - thr must be serializt with JSON.stringify(data)
    })
  }
}