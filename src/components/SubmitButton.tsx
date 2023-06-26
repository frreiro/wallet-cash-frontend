import {SubmitButtonContainer } from '../styles/Auth/auth';
import { InfinitySpin } from 'react-loader-spinner';
import { theme } from '../styles/Theme';
import { StyledProps } from 'styled-components';

type ISubmitButtonProps = {
	isLoading: boolean,
	text: string,
	marginTop?: number
}

const SubmitButton: React.FC<ISubmitButtonProps> = ({isLoading,text,marginTop = 0}: ISubmitButtonProps) => {
	return (

		<SubmitButtonContainer type='submit' marginTop={marginTop} disabled={isLoading} isLoading={isLoading}>
			{
				!isLoading 
					? text
					: <InfinitySpin 
						width='100'
						color={theme.colors.primary}
					/>
			}
		</SubmitButtonContainer>
	);
};

export {
	SubmitButton
};