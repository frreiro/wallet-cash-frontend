import  dayjs,{ Dayjs }from 'dayjs';
import React, { Dispatch, useState } from 'react';
import { MobileDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';


import { FilterItem } from '../styles/transfer/filterTransfers';
import { OpenCalendar } from '../styles/transfer/dateFilter';
import { IFilterDate } from '../interfaces/Filter';



const CustomDatePicker: React.FC<{
	dateData: IFilterDate, 
	setDateData: Dispatch<IFilterDate>
	}> = ({dateData, setDateData}) => {


		const desableDate = () => {
			setDateData({
				...dateData,
				isActivated: false, 
			});
		};


		const handleChange = (newValue: Dayjs | null) => {
			const formatedDate = dayjs(newValue).format('YYYY-MM-DD');
			setDateData({
				isActivated: true, 
				date: formatedDate
			});
	  };
	  
		return( 
		
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<MobileDatePicker
					label="Basic example"
					value={dateData?.date}
					onChange={handleChange}
					renderInput={(params) => <FilterItem >
						<OpenCalendar  {...params} className='open-calendar'>
							<h2>DAY</h2>
							{dateData?.isActivated 
								? <p>({dateData.date})</p>
								: <></>
							}
						</OpenCalendar>
					
						<input type='checkbox' 
							onClick={() => desableDate()}
						/>
					</FilterItem>}
				/>
			</LocalizationProvider>
		);
	};

export {
	CustomDatePicker,
};