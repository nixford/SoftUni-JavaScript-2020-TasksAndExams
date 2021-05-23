const apiKey = 'AIzaSyDuIoJstS-cz6VnpUD6PT0-Q6uhxij9MSc';

const authService = {
  login(email, password) {
    fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ // wrap/serialize the object with JSON.stringify
        email,
        password,
        returnSecureToken: true,
      })
    })
  }
}