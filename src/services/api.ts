import axios from 'axios';

const fetchAxios = axios.create({
	baseURL: 'http://localhost:5000'
});

export {
	fetchAxios
};