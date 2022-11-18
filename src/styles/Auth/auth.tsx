import styled from 'styled-components';

const Main = styled.main`
	width: 100vw;
	height: 100vh;
	background: ${props => props.theme.gradient.black_white};
	padding: 139px 53px 266px 53px;

	form{
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top:104px;

	}
	
	article{
		width: 100%;
		margin-top:35px;
		
	}

	h1{
		font-family: ${props => props.theme.font.family.primary};
		font-size: ${props => props.theme.font.sizes.mobile.x_large};
		color:  ${props => props.theme.colors.secondary};
		letter-spacing:  ${props => props.theme.font.type.spaced_font};
		font-weight: 700;
	}

	p{
		font-family: ${props => props.theme.font.family.primary};
		font-size: ${props => props.theme.font.sizes.mobile.medium};
		color:  ${props => props.theme.colors.secondary};
		letter-spacing:  ${props => props.theme.font.type.spaced_font};
		font-weight: 400;
		margin-bottom: 5px;
	}

	div{
		position: relative;
	}

	input{
		width: 100%;
		height: 45px;
		border: 1px solid ${props => props.theme.colors.secondary};
		border-radius: 10px;
		background-color: transparent;
		outline: none;
		color:  ${props => props.theme.colors.secondary};
		font-family: ${props => props.theme.font.family.primary};
		padding: 10px 10px 10px 10px;
	}

	input[type='text']{
		padding: 10px 10px 10px 25px;
	}

	div:before{
		content: "@";
		position: absolute;
		bottom: 15px;
		left: 15px;
		color:  ${props => props.theme.colors.secondary};
		font-family: ${props => props.theme.font.family.primary};
	}


`;

const SubmitButton = styled.button`
	width: 147px;
	height: 44px;
	margin-top: 68px;
	border-radius: 5px ;
	font-size: ${props => props.theme.font.sizes.mobile.medium};
	color:  ${props => props.theme.colors.primary};
	font-family: ${props => props.theme.font.family.primary};
`;

export {
	Main,
	SubmitButton
};