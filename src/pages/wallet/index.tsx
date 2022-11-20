import Router from 'next/router';
import { GetServerSideProps } from 'next';
import {parseCookies, destroyCookie} from 'nookies';
import { MdOutlineAddBox, MdLogout } from 'react-icons/md';


import { AccountInfo } from '../../interfaces/Account';
import { Balance } from '../../components/bannerBalance';
import { fetchAccount, fetchTransactions } from '../../services/wallet.api';
import { ITransaction, Transactions } from '../../components/bannerTransactions';
import { Title, TransferText, WalletContainer } from '../../styles/wallet/wallet';



export default function Wallet({accountData, transactionsData}: {accountData: AccountInfo, transactionsData: ITransaction[]} ){

	const logOut = () => {
		destroyCookie(undefined, 'ng-cash-token');
		Router.push('/');
	};
	
	return (
		<WalletContainer>
			<MdLogout className='logout' onClick={logOut}/>
			<Title>hello, {accountData.username}</Title>
			<div className='divider'>
				<Balance balance={accountData.balance}/>
				<TransferText onClick={() => Router.push('/transfer')}>
					<h1>NEW TRANSFER</h1>
					<MdOutlineAddBox className='add'/>
				</TransferText>
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