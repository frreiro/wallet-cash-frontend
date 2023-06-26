import Router from 'next/router';
import { MdClose } from 'react-icons/md';
import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';


import { NewTransfer } from '../../components/bannerTransfer';
import { TransferContainer, TransferTitle } from '../../styles/transfer/transfer';


export default function Transfer() {
	return (
		<TransferContainer>
			<MdClose className='close' onClick={() => Router.push('/wallet')}/>
			<TransferTitle>new transfer</TransferTitle>
			<div className='divider'>
				<NewTransfer/>

			</div>

		</TransferContainer>
	);
}

export const getServerSideProps: GetServerSideProps =  async (context) => {

	const { 'wallet-cash-token': token} = parseCookies(context);
	if(!token){
		return{
			redirect: {
				destination: '/',
				permanent: false
			}
		};
	}
	
	return {
		props: {}	
	};
};