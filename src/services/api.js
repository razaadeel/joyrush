import axios from 'axios';


//Base url
export const api = axios.create({
    baseURL: 'https://joyrush.herokuapp.com/',
    timeout: 5000
});