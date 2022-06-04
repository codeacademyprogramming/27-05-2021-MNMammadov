import axios from 'axios';

export class HttpClient {
    baseUrl;

    constructor(url) {
        this.baseUrl = url
    }

    async get(url) {
        const resp = await axios.get(`${this.baseUrl}/${url}`);
        return resp.data;
    }
}