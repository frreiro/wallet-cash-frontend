import { Transfer } from '../interfaces/Transfer';
import { fetchAxios } from './api';
import { parseCookies } from 'nookies';
const { 'ng-cash-token': token} = parseCookies();

const createTransaction = async (body: Transfer): Promise<string> => {
	const response = await fetchAxios.post('/transactions', body,{
		headers: {
			'Authorization': `Bearer ${token}`
		}
	});
	return response.data;
};



export {
	createTransaction
};
