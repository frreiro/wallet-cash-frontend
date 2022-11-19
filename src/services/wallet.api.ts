import { AccountInfo } from '../interfaces/Account';
import { fetchAxios } from './api';

const fetchAccount = async (token: string): Promise<AccountInfo> => {
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