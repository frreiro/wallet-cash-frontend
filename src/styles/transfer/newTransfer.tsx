import styled from 'styled-components';

interface IHolderContent{
	content: string
}

const BannerTransfer = styled.div`
	width: 100%;
	padding: 59px 32px 0 32px;
	letter-spacing: ${props => props.theme.font.type.spaced_font};
	color: ${props => props.theme.colors.secondary};
	
	h1{
		font-size: ${props => props.theme.font.sizes.mobile.medium};
		font-family: ${props => props.theme.font.family.secondary};
		font-weight: 900;
	}
	h1:first-of-type{
		margin-bottom: 30px;
	}

	h1:not(:first-of-type){
		margin-bottom: 10px;
	}

	input[placeholder='user']{
		padding:  0 0 0 30px;

	}

	input:not(input[placeholder='user']){
		padding:  0 0 0 45px;
		font-size: ${props => props.theme.font.sizes.mobile.x_large};
		
	}

	.div_button{
		width: 100%;
		display: flex;
		justify-content: center;
	}

	button{
		width: 105px;
		height: 41px;
		outline: none;
		border-radius: 5px;
		background-color:  ${props => props.theme.colors.secondary};
		color:  ${props => props.theme.colors.primary};
		font-family: ${props => props.theme.font.family.primary};
		font-size: ${props => props.theme.font.sizes.mobile.small};
	}

`;


const HolderInput = styled.div<IHolderContent>`
	position: relative;
	margin-bottom: 50px;

	:before{
		content:  '${props => props.content}';
		position: absolute;
		color:  ${props => props.theme.colors.secondary};
		font-family: ${props => props.theme.font.family.primary};
		font-size: ${props => props.theme.font.sizes.mobile.medium};
		font-weight: 300;
		left: 10px;
		bottom: 5px;
	}



	input{
		width: 100%;
		background-color: transparent;
		outline: none;
		font-size: ${props => props.theme.font.sizes.mobile.medium};
		color: ${props => props.theme.colors.secondary};
		font-family: ${props => props.theme.font.family.primary};
		font-weight: 400;
		border-bottom: 1px solid ${props => props.theme.colors.third};
	}

`;


const BannerNewTransaferContainer = styled.div`
	min-width: 326px;
	height: 440px;

	
`;

export {
	BannerNewTransaferContainer,
	BannerTransfer,
	HolderInput,
};