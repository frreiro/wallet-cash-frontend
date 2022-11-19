import { AxiosError, AxiosResponse } from 'axios';
import { User } from '../interfaces/User';
import { fetchAxios } from './api';


const createUser = async (body?: User): Promise<void> => {
	const response = await fetchAxios.post('/signup', body);
	return response.data;
};


const signinUser = async (body?: User): Promise<string> => {
	const response = await fetchAxios.post('/signin', body);
	return response.data;
};


export {
	createUser,
	signinUser
};