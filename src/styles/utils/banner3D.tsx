import styled, {css} from 'styled-components';
import { IBanner3DProps } from '../../interfaces/Styles/IBanner3Props';




const DownBanner = styled.article`
	width: 100%;
	height: 100%;
	border-radius: 10px;
	background-color: red;


	position: absolute;
	top: 10px;
	left: 7px;
	z-index: -1;



`;

const UpBanner = styled.article<IBanner3DProps>`
	width: 100%;
	height: 100%;
	position: relative;
	border-radius: 10px;


	
	${props => props.bannerTheme === 'light'  ? css`
		background-color: ${props => props.theme.colors.secondary };
		border: 1px solid ${props => props.theme.colors.primary};

		${DownBanner}{
			background-color: ${props => props.theme.colors.primary};
			border: 1px solid ${props => props.theme.colors.secondary};
		}
		`
		: css`

		background-color: ${props => props.theme.colors.primary };

		${DownBanner}{
			background-color: ${props => props.theme.colors.secondary };
			border: 1px solid ${props => props.theme.colors.primary};
		}
	`};

		

`;



export {
	UpBanner,
	DownBanner,
};