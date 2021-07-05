import request from "./request.js";

const apiKey = "AIzaSyB9TDR4wQY0t7aY3yEcJVOQYV95JDkdat0";
const baseUrl = 'https://softwiki-77f05-default-rtdb.europe-west1.firebasedatabase.app';

let endpoints = {
  login: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
  register: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
}

export default {
  async login(email, password) {
    let data = request.post(endpoints.login, {
      email,
      password,
    });

    // console.log(email)

    localStorage.setItem('auth', JSON.stringify(data));

    return data;
  },

  async register(email, password) {
    let data = request.post(endpoints.register, {
      email,
      password,
    });

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