import authService from "./services/authService.js";

export const onLoginSubmit = (e) => {
    e.preventDefault();    

    let formData = new FormData(e.target);

    let email = formData.get('email');
    
    let password = formData.get('password');

    // console.log(email)

    authService.login(email, password)
        .then(data => {
            // console.log(data)
            console.log(`You are logged with ${data.email}`)
        })
        .catch((err) => {
            console.log(err)
        })
}