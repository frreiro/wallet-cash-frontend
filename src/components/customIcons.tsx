import React from 'react';
import { MdArrowCircleUp } from 'react-icons/md';
import { MdArrowCircleDown } from 'react-icons/md';
import { ICustomIconProps } from '../interfaces/Styles/ICustomIcon';

import { IconBackground, IconContainer } from '../styles/utils/customIcons';




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