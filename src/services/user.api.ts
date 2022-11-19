import { AxiosError, AxiosResponse } from 'axios';
import { User } from '../pages';
import { fetchAxios } from './api';


const createUser = async (body?: User): Promise<AxiosResponse | AxiosError> => {
	console.log(body);
	const response = await fetchAxios.post('/signup', body);
	return response.data;
};

export {
	createUser
};