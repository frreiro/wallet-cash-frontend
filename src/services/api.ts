import axios from 'axios';

const BASE_URL = process.env.REQUEST_URL;


const fetchAxios = axios.create({
	baseURL: BASE_URL,
});


export {
	fetchAxios,
};