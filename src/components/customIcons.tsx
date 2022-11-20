import React, { ReactNode } from 'react';
import { MdArrowCircleUp } from 'react-icons/md';
import { MdArrowCircleDown } from 'react-icons/md';

import { IconBackground, IconContainer } from '../styles/utils/customIcons';


export interface ICustomIconProps{
	type: 'cash-in'| 'cash-out'

}


const CustomIcon: React.FC<ICustomIconProps> = ({type}) => {
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