import axios from 'axios';

const BASE_URL = 'http://127.0.1:5000';


const fetchAxios = axios.create({
	baseURL: BASE_URL,
});


export {
	fetchAxios,
};