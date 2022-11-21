import axios from 'axios';
import { parseCookies } from 'nookies';

const BASE_URL = 'http://localhost:5000';


const fetchAxios = axios.create({
	baseURL: BASE_URL,
});


export {
	fetchAxios,
};