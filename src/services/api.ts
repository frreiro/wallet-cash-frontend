import axios from 'axios';
import { parseCookies } from 'nookies';

const BASE_URL = 'http://localhost:5000';
const { 'ng-cash-token': token} = parseCookies();


const fetchAxios = axios.create({
	baseURL: BASE_URL,
});

console.log(token);


export {
	fetchAxios,
};