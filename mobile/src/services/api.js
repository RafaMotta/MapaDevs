import axios from 'axios';

const api = axios.create({
    //localhost do expo:porta usada no backend
    baseURL: 'http://192.168.1.54:3333'
});

export default api;