import styled from 'styled-components';

const TransactionDetails = styled.div`
	display: flex;
	align-items:center;
`;

const TransactionInfo = styled.div`
		letter-spacing: ${props => props.theme.font.type.spaced_font};
		font-weight: 400;
		font-family: ${props => props.theme.font.family.secondary};
		margin-left: 4px;

	h2{
		
		font-size:  ${props => props.theme.font.sizes.mobile.small};
		color: ${props => props.theme.colors.primary}
	}
	
	p{
		font-size:  ${props => props.theme.font.sizes.mobile.x_small};
		color: ${props => props.theme.colors.third};
		margin-top: 4px;
		margin-left: 2px;
	}
`;

const TransactionValue = styled.h1`
		letter-spacing: ${props => props.theme.font.type.spaced_font};
		font-family: ${props => props.theme.font.family.primary};
		font-size:  ${props => props.theme.font.sizes.mobile.small};
		font-weight: 700;

		&.cash-in{

			&::before{
				content: '+';
			}

			color: ${props => props.theme.colors.green}
		}

		&.cash-out{

			&::before{
				content: '-';
			}

			color: ${props => props.theme.colors.red}
		}
`;

const TransactionContainer = styled.section`
	padding: 17px 0 17px 0;
	display: flex;
	align-items:center;
	justify-content: space-between;
`;




export {
	TransactionContainer,
	TransactionValue,
	TransactionInfo,
	TransactionDetails,
};