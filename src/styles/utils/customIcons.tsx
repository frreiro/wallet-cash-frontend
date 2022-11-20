import styled from 'styled-components';
import { ICustomIconProps } from '../../components/customIcons';


const IconContainer = styled.div`
	width: 30px;
	height: 30px;
	position: relative;

	svg{
		width: 30px;
		height: 30px;
		color: ${props => props.theme.colors.primary};
		border-radius: 50%;
		position: absolute;
		z-index: 2;
	}


`;

const IconBackground = styled.div<ICustomIconProps>`
		width: 20px;
		height: 20px;
		position: absolute;
		border-radius: 100%;
		margin-top: auto;
		margin-bottom: auto;
		margin-left: auto;
		margin-right: auto;
		left: 0;
		right: 0;
		top:0;
		bottom:0;
		z-index: 1;
		opacity: 0.4;
		
		background-color: ${props =>
		 props.type === 'cash-in' 
		 	? props.theme.colors.green
			: props.theme.colors.red};
			
`;


export {
	IconContainer,
	IconBackground,

};