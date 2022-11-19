import { GetServerSideProps } from 'next';
import {  useState } from 'react';
import {parseCookies} from 'nookies';
import { AccountInfo } from '../../interfaces/Account';
import { fetchAccount } from '../../services/wallet.api';
import { Banner3D } from '../../components/banner3D';
import { BannerBalance, BannerBalanceContainer, Title, WalletContainer } from '../../styles/wallet/balance';
import { cashParser } from '../../utils/cashParser';
import { Balance } from '../../components/bannerBalance';


export default function Wallet({accountData}: {accountData: AccountInfo} ){
	//console.log(accountData);

	return (
		<WalletContainer>
			<Title>hello, user</Title>
			<div className='divider'>
				<Balance balance={accountData.balance}/>
				
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
	return {
		props: {
			accountData: data
		}
	};
};