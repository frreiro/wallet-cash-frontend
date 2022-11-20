import { BannerTransactions, BannerTransactionsContainer, BannerTransactionsHeader } from '../styles/wallet/transactios';
import { Banner3D } from './banner3D';
import { MdAttachMoney } from 'react-icons/md';
import { Transaction } from './transacation';

export interface ITransaction {
	id: number,
	value: number
	type: 'cash-in' | 'cash-out',
	date: Date,
	from: {
		id: number,
		username: string,
		accountId: number
	},
	to: {
		id: number,
		username: string,
		accountId: number
	},
}

const Transactions: React.FC<{transactions: ITransaction[]}> = ({transactions}) => {

	return (
		<BannerTransactionsContainer>
			<Banner3D bannerTheme='light'>
				<BannerTransactions>
					<BannerTransactionsHeader>
						<MdAttachMoney className='money'/>
						<h1>TRANSACTIONS</h1>
						<button>Filter</button>
					</BannerTransactionsHeader>
					<hr/>
					{
						transactions?.map((transaction) => {
							return(
								<Transaction 
									key={transaction.id} 
									transaction={transaction}
								/>
							);

						})
					}
				</BannerTransactions>
			</Banner3D>
		</BannerTransactionsContainer>
	);
};

export{
	Transactions
};