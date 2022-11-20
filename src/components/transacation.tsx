import { useContext, useEffect, useRef, useState } from 'react';
import { TransactionContainer, TransactionDetails, TransactionInfo, TransactionValue } from '../styles/wallet/transaction';
import { cashParser } from '../utils/cashParser';
import { ITransaction } from './bannerTransactions';
import { CustomIcon } from './customIcons';




const Transaction: React.FC<{transaction: ITransaction }> = ({transaction}) => {

	const transformDate = (date: Date) => {
		const newDate = String(date).split('-');
		const year = newDate.at(0);
		const month = newDate.at(1);
		const day = newDate.at(2)?.split('T').at(0);
		if(typeof(month) === 'string' && typeof(day) === 'string' && typeof(year) === 'string') {
			const fullDate = day?.concat('/', month, '/', year);
			return fullDate;
		}
	};

	return (
		<>
			<TransactionContainer>
				<TransactionDetails>
					<CustomIcon type={transaction.type}/>
					<TransactionInfo>
						<h2>@{transaction.type === 'cash-in' ? transaction.from.username : transaction.to.username}</h2>
						<p>{transformDate(transaction.date)}</p>
					</TransactionInfo>
				</TransactionDetails>
				<TransactionValue className={transaction.type}>{cashParser(transaction.value)}</TransactionValue>
			</TransactionContainer>
			<hr className='divider'/>
		</>
	);
}; 

export{
	Transaction
};