import styled from 'styled-components';


const BannerBalance = styled.article`
	height: 100%;
	padding: 15px 20px 0px 27px;
	letter-spacing: ${props => props.theme.font.type.spaced_font}; ;
	color:  ${props => props.theme.colors.secondary};	
	

	p{
		font-family: ${props => props.theme.font.family.secondary};
		font-size:  ${props => props.theme.font.sizes.mobile.medium};
		margin-bottom: 10px;
	}
	
	span{
		font-family: ${props => props.theme.font.family.primary};
		font-size:  ${props => props.theme.font.sizes.mobile.x_large};
		font-weight: 700;
		margin-right: 17px;
	}
	
	h1{
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		
		font-family: ${props => props.theme.font.family.primary};
		font-size:  ${props => props.theme.font.sizes.mobile.xx_large};
		font-weight: 700;
	}
	
`;

const BannerBalanceContainer = styled.article`
	width: 326px;
	height: 113px;
	margin-top: 42px;
	
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
	BannerBalanceContainer,
	BannerBalance
};