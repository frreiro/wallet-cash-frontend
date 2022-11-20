import { ITransaction } from '../components/bannerTransactions';
import { Method } from '../components/filterSelector';
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

const fetchTransactions = async (token: string, filter?: Method): Promise<ITransaction> => {
	let endPoint = '/transactions';
	if(filter === 'cashin' || filter === 'cashout' || filter === 'all'){
		endPoint = endPoint.concat(`?method=${filter}`);
	}
	const response = await fetchAxios.get(endPoint, {
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