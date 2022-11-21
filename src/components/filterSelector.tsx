import React, { useState } from 'react';
import Router from 'next/router';

import { CustomDatePicker } from './dateFilter';
import { FilterButton, FilterContainer, FilterItem } from '../styles/transfer/filterTransfers';



export interface IFilterSelector{
	setVisibility: () => void;
}
export interface IFilterDate{
	isActivated: boolean;
	date: string | null;
}
export interface IFiltersTypes{
	date?: string
	method?: 'cashout' | 'cashin' | 'all' 
}

const FilterSelector: React.FC<IFilterSelector> = ({setVisibility}) => {
	const [type, setType] = useState<IFiltersTypes['method']>( 'all');

	const [dateData, setDateData] = React.useState<IFilterDate>({ 
		isActivated: false,
		date: null
	});

	const setFilter = () => {
		const queryType: IFiltersTypes = {} as IFiltersTypes;
		if(dateData.isActivated && dateData.date){
			queryType.date = dateData.date;
		}

		if(type && type !== 'all'){
			queryType.method = type;
		}

		setVisibility();
		Router.push({
			pathname: '/wallet',
			query: {...queryType}
		});
	};


	const changeType = (newType: IFiltersTypes['method']) => {
		setType(newType);
	};
	
	return (
		<FilterContainer>
			<FilterItem>
				<h2>ALL</h2>
				<input 
					type='radio'
					name='type'
					value='cashout'
					defaultChecked={true}
					onClick={() => changeType('all')}
				/>
			</FilterItem>
			<hr/>
			<FilterItem>
				<h2>CASH-OUT</h2>
				<input 
					type='radio'
					name='type'
					value='cashout'
					onClick={() => changeType( 'cashout')}
				/>
			</FilterItem>
			<hr/>
			<FilterItem>
				<h2>CASH-IN</h2>
				<input 
					type='radio'
					name='type'
					value='cashin'
					onClick={() => changeType( 'cashin')}
				  />

			</FilterItem>
			<hr/>
			<CustomDatePicker
			 dateData={dateData}
			 setDateData={setDateData}
			 />
			<hr/>
			<FilterButton>
				<button onClick={setFilter}>Apply</button>
			</FilterButton>
		</FilterContainer>
	);
};


export {
	FilterSelector
};