import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.0.1.8:3334'
});

export default api;