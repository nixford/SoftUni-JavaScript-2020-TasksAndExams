import request from "./request.js";
import authService from "./authService.js";

const baseUrl = 'https://softwiki-77f05-default-rtdb.europe-west1.firebasedatabase.app';

const urlBuilder = (resource) => {
    return `${baseUrl}/${resource}.json?auth=${authService.getData().idToken}`;
}

export default {
    async create(article) {
        let res = request.post(urlBuilder('articles'), article);

        return res;
    }
}