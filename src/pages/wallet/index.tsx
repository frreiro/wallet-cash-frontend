import { GetServerSideProps } from 'next';
import {parseCookies} from 'nookies';
import { AccountInfo } from '../../interfaces/Account';
import { fetchAccount, fetchTransactions } from '../../services/wallet.api';
import { Balance } from '../../components/bannerBalance';
import { Title, WalletContainer } from '../../styles/wallet/wallet';
import { ITransaction, Transactions } from '../../components/bannerTransactions';


export default function Wallet({accountData, transactionsData}: {accountData: AccountInfo, transactionsData: ITransaction[]} ){
	console.log(transactionsData);
	
	return (
		<WalletContainer>
			<Title>hello, {accountData.username}</Title>
			<div className='divider'>
				<Balance balance={accountData.balance}/>
				<Transactions transactions={transactionsData} />
			</div>

			
		</WalletContainer>
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
	const dataTransactions = await fetchTransactions(token);
	return {
		props: {
			accountData: data,
			transactionsData: dataTransactions
		}
	};
};