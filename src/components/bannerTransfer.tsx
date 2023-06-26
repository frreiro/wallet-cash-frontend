import { joiResolver } from '@hookform/resolvers/joi';
import { SubmitErrorHandler, SubmitHandler, useForm, useFieldArray } from 'react-hook-form';
import { toast } from 'react-toastify';
import { TransferForm } from '../interfaces/Transfer';
import { transferSchema } from '../schemas/transfer.schema';
import { BannerNewTransaferContainer, BannerTransfer, HolderInput } from '../styles/transfer/newTransfer';
import { Banner3D } from './banner3D';
import { cashParser } from '../utils/cashParser';
import { createTransaction } from '../services/transfer.api';
import { InfinitySpin } from 'react-loader-spinner';
import { theme } from '../styles/Theme';
import { useState } from 'react';
import { SubmitButton } from './SubmitButton';

const NewTransfer: React.FC = () => {
	const {register,handleSubmit, setValue} = useForm<TransferForm>({
		resolver: joiResolver(transferSchema),
		criteriaMode: 'all'
	});

	const [IsLoading, setIsLoading] = useState(false);


	const normalizeCashFormat = (value: string | undefined) => {
		const number = Number(value?.replace(/[\D]+/g, ''));
		const BRL_PARSER = cashParser(Number(number));
		return {
			inputNumber: number,
			inputMask: number > 0 ? BRL_PARSER.substring(0,10) : '' 
		};
	};



	const makeTransfer: SubmitHandler<TransferForm> = async (data) => {
		const {inputNumber: transferValue} = normalizeCashFormat(data.value);
		setIsLoading(true);
		try {
			await createTransaction({
				username: data.username,
				value: transferValue
			});
			toast.success('Transfer done');
			setValue('username', '');
			setValue('value', '');
		} catch (e: any) {
			console.log(e);
			toast.error(e.response.data.message);
		}
		finally{
			setIsLoading(false);
			
		}
	};

	const onFormError: SubmitErrorHandler<TransferForm> = (errors) => {
		if(errors.username)  toast.error(errors.username.message); 
		if(errors.value)  toast.error(errors.value.message); 
	};




	return (
		<BannerNewTransaferContainer>
			<Banner3D bannerTheme='dark'>
				<BannerTransfer>
					<form onSubmit={handleSubmit(makeTransfer, onFormError)}>

						<h1>username</h1>
						<HolderInput content={'@'}>
							<input 
								type="text" 
								placeholder='user'
								{...register('username')}/>
						</HolderInput>

						<h1>value</h1>
						<HolderInput content={'R$'}>
							<input
								//type='number'
								placeholder='0,00'
							 {...register('value', {
									onChange: (e) => {
										const {value} = e.target;
										const {inputMask} = normalizeCashFormat(value);
										e.target.value = inputMask;
									}
							 })}/>
						</HolderInput>

						<div className='div_button'>
							<SubmitButton text={'transfer'} isLoading={IsLoading}/>
						</div>
					</form>
				</BannerTransfer>
			</Banner3D>
		</BannerNewTransaferContainer>
	);
};

export {
	NewTransfer
};