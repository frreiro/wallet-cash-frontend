import styled, { DefaultTheme } from 'styled-components';


const FilterButton = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	
	button {
		width: 60px;
		height: 25px;
		color: ${props => props.theme.colors.primary};
		background-color: ${props => props.theme.colors.secondary};
		margin-top: 10px;
		margin-bottom: 10px;
	}
`;

const FilterItem = styled.div`
cursor: pointer;
display: flex;
align-items: center;
justify-content: space-between;
padding: 10px 20px 10px 10px;

	:hover{
		background-color:${props => props.theme.colors.primary};
	}

	h2{
		font-family: ${props => props.theme.font.family.secondary};
		font-size: ${props => props.theme.font.sizes.mobile.small};
		color: ${props => props.theme.colors.secondary};
		letter-spacing: ${props => props.theme.font.type.spaced_font};
		font-weight: 600;
	}

	p{
		font-family: ${props => props.theme.font.family.secondary};
		font-size: ${props => props.theme.font.sizes.mobile.x_small};
		color: ${props => props.theme.colors.secondary};
		letter-spacing: 0;
		font-weight: 600;
		padding: 5px 0px 0 0px;
	}

	.calendar-icon{
		font-size: ${props => props.theme.font.sizes.mobile.small};
		color: ${props => props.theme.colors.secondary};
	}

	input{
		margin-left: 10px;
	}
`;

const FilterContainer = styled.div`
	position: absolute;
	right: 10px;
	top: 20px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 3px;
	background-color: ${props => props.theme.colors.third};

	hr{
		background-color: ${props => props.theme.colors.secondary};
	}
	z-index: 10;
`;

export {
	FilterContainer,
	FilterItem,
	FilterButton
};