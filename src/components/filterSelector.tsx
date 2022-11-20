import Router from 'next/router';
import { FilterContainer, FilterItem } from '../styles/transfer/filterTransfers';

export type Method = 'all' | 'cashout' | 'cashin'
export interface IFilterSelector{
	setVisibility: () => void;
}

const FilterSelector: React.FC<IFilterSelector> = ({setVisibility}) => {

	const setFilter = (method: Method) => {
		setVisibility();
		Router.push(`/wallet?method=${method}`);
	};

	
	return (
		<FilterContainer>
			<FilterItem onClick={() => setFilter('all')}><h2>ALL</h2></FilterItem>
			<hr/>
			<FilterItem onClick={() => setFilter('cashout')}><h2>CASH-OUT</h2></FilterItem>
			<hr/>
			<FilterItem onClick={() => setFilter('cashin')}><h2>CASH-IN</h2></FilterItem>
		</FilterContainer>
	);
};


export {
	FilterSelector
};