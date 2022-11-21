import { ITransaction } from '../components/bannerTransactions';
import { IFiltersTypes } from '../components/filterSelector';
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

const fetchTransactions = async (token: string, filter?: IFiltersTypes): Promise<ITransaction> => {

	const response = await fetchAxios.get('/transactions', {
		params: filter,
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