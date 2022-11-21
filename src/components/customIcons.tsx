import React from 'react';
import { MdArrowCircleUp } from 'react-icons/md';
import { MdArrowCircleDown } from 'react-icons/md';
import { ITransaction } from '../interfaces/Transactions';

import { IconBackground, IconContainer } from '../styles/utils/customIcons';




const CustomIcon: React.FC<{type: ITransaction['type']}> = ({type}) => {
	return (
		<IconContainer>
			{type === 'cash-in'
				? <MdArrowCircleDown/>
				: <MdArrowCircleUp/>
			}
			<IconBackground type={type}/>
		</IconContainer>
	);
}; 

export{
	CustomIcon
};