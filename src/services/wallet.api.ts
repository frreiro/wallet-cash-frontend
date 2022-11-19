import { Account } from '../interfaces/Account';
import { fetchAxios } from './api';

const fetchAccount = async (token: string): Promise<Account> => {
	const response = await fetchAxios.get('/account', {
		headers: {
			'Authorization': `Bearer ${token}`
		}
	});
	return response.data;
};

export {
	fetchAccount
};