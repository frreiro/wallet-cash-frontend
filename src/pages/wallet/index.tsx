import { GetServerSideProps } from 'next';
import {  useState } from 'react';
import {parseCookies} from 'nookies';
import { Account } from '../../interfaces/Account';
import { fetchAccount } from '../../services/wallet.api';


export default function Wallet({accountData}: {accountData: Account} ){
	const [refresh, setRefresh] = useState(false);
	//console.log(accountData);

	return (
		<>
			<h1>Wallet</h1>
			<h1>Balance: {accountData.balance}</h1>
			<button onClick={() => setRefresh(!refresh)}>Click</button>
		</>
	);
}
	
export const getServerSideProps: GetServerSideProps =  async (context) => {

	const { 'ng-cash-token': token} = parseCookies(context);
	if(!token){
		return{
			redirect: {
				destination: '/',
				permanent: false
			}
		};
	}
	
	
	const data = await fetchAccount(token);
	return {
		props: {
			accountData: data
		}
	};
};