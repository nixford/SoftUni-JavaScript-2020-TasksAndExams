import authService from "./services/authService.js";
import router from './router.js'

export const onLoginSubmit = (e) => {
    e.preventDefault();

    let formData = new FormData(e.target);

    let email = formData.get('email');

    let password = formData.get('password');

    let rePassword = formData.get('rep-pass');

    // console.log(email)    

    if (!rePassword) {
        authService.login(email, password)
            .then(data => {
                // console.log(data)
                console.log(`You are logged with ${data.email}`)
                localStorage.setItem('auth', JSON.stringify(data));
                router('/');
            })

    } else {
        if (rePassword !== password) {
            console.log('Passwords must be equal')
            return new Error('Passwords must be equal')
        }

        authService.register(email, password)
            .then((data) => {
                console.log(`You are succsessfully registered with ${data.email}`);    
                localStorage.setItem('auth', JSON.stringify(data));     
                router('/');       
            });
    }
}