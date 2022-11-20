import { ITransaction } from '../components/bannerTransactions';
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

const fetchTransactions = async (token: string): Promise<ITransaction> => {
	const response = await fetchAxios.get('/transactions', {
		headers: {
			'Authorization': `Bearer ${token}`
		}
	});
	return response.data;
};


export {
	fetchAccount,
	fetchTransactions
};