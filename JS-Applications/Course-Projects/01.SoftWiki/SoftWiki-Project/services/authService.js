import request from "./request.js";

const apiKey = "AIzaSyB9TDR4wQY0t7aY3yEcJVOQYV95JDkdat0";
const baseUrl = 'https://softwiki-77f05-default-rtdb.europe-west1.firebasedatabase.app';

let endpints = {
    login: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`
}

export default {
    async login(email, password) {
        let data = request.post(endpints.login, {
            email,
            password,
        });

        localStorage.setItem('auth', JSON.stringify(data)); 
    
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