import axios from 'axios';

const api = axios.create({
    baseURL: "https://edersbox-backend.herokuapp.com"
});

export default api