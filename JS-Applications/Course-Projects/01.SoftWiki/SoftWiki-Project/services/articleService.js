import request from "./request.js";
import authService from "./authService.js";

const baseUrl = 'https://softwiki-77f05-default-rtdb.europe-west1.firebasedatabase.app';

const urlBuilder = (resource) => {
    return `${baseUrl}/${resource}.json?auth=${authService.getData().idToken}`;
}

export default {
    async getAll() {
        let articles = await request.get(urlBuilder('articles'));

        return Object.keys(articles).map(key => ({_id: key, ...articles[key]}));
    },

    async create(article) {
        let res = request.post(urlBuilder('articles'), article);

        return res;
    }
}