import styled from 'styled-components';

const TransferText = styled.div`
	width: 326px;
	margin-top: 41px;
	display: flex;
	justify-content: right;
	align-items: center;
	
	h1{
		font-family: ${props => props.theme.font.family.primary};
		font-size:  ${props => props.theme.font.sizes.mobile.medium};
		font-weight: 600;
		letter-spacing: ${props => props.theme.font.type.spaced_font}; ;
		color:  ${props => props.theme.colors.primary};	
	
	}
	.add {
		font-size:  ${props => props.theme.font.sizes.mobile.large};
		margin-left: 14px;
	}

`;

const WalletContainer = styled.main`
	width: 100vw;
	height: 100vh;
	padding: 55px 44px 0 44px;

	
	.divider{
		display: flex;
		flex-direction: column;
		align-items: center;
		
	}

`;

const Title = styled.h1`

	font-family: ${props => props.theme.font.family.primary};
	font-size: ${props => props.theme.font.sizes.mobile.x_large};
	color:  ${props => props.theme.colors.primary};
	letter-spacing:  ${props => props.theme.font.type.spaced_font};
	font-weight: 700;

`;


export {
	WalletContainer,
	Title,
	TransferText
};