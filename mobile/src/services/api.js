import axios from 'axios';

const api = axios.create({
    //localhost do expo:porta usada no backend
    baseURL: 'http://locahost:3333'
});

export default api;