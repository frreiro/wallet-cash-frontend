import styled from 'styled-components';

const FilterItem = styled.div`

cursor: pointer;

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
`;

export {
	FilterContainer,
	FilterItem
};