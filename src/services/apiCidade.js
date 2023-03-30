import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.hgbrasil.com/weather?key=132aecea&format=json-cors&city_name='
});

export default api;