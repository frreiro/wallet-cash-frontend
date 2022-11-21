import styled from 'styled-components';



const TransferTitle = styled.h1`

	font-family: ${props => props.theme.font.family.primary};
	font-size: ${props => props.theme.font.sizes.mobile.x_large};
	color:  ${props => props.theme.colors.primary};
	letter-spacing:  ${props => props.theme.font.type.spaced_font};
	font-weight: 700;
	margin-bottom: 25px;
`;

const TransferContainer = styled.main`
	width: 100vw;
	height: 100%;
	position: relative;
	padding: 50px 44px 0 44px;

	
	.divider{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		
	}

	.close{
		width: 20px;
		color: ${props => props.theme.colors.third};
		position: absolute;
		top: 30px;
		left: 30px;
		cursor: pointer;
	}

`;

export {
	TransferContainer,
	TransferTitle,
};