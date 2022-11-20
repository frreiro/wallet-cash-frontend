import styled from 'styled-components';



const TransferTitle = styled.h1`

	font-family: ${props => props.theme.font.family.primary};
	font-size: ${props => props.theme.font.sizes.mobile.x_large};
	color:  ${props => props.theme.colors.primary};
	letter-spacing:  ${props => props.theme.font.type.spaced_font};
	font-weight: 700;

`;

const TransferContainer = styled.main`
	width: 100vw;
	height: 100vh;
	padding: 55px 44px 0 44px;

	
	.divider{
		display: flex;
		flex-direction: column;
		align-items: center;
		
	}

`;

export {
	TransferContainer,
	TransferTitle,
};