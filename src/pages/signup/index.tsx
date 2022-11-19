import Head from 'next/head';
import React from 'react';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import {joiResolver} from '@hookform/resolvers/joi';
import {toast} from 'react-toastify';
import { useRouter } from 'next/router';
import { authSchema } from '../../schemas/auth.schema';
import { useCreateUser } from '../../hooks/api/useCreatUser';
import { User } from '../../interfaces/User';
import { Main, SubmitButton } from '../../styles/Auth/auth';



export default function Siginup() {
	const {register,handleSubmit} = useForm<User>({
		resolver: joiResolver(authSchema),
		criteriaMode: 'all'
	});

	const router = useRouter();
	const {
		isSendingUser,
		createUser
	} = useCreateUser();

	
	
	const onFormSubmit: SubmitHandler<User> = async  (data) => {
		try {
			await createUser({username: data.username, password: data.password});
			toast.success('Successfully registred');
			router.push('/login');
		} catch (e) {
			toast.error('Could not create user');
		}

		
	};

	const onFormError: SubmitErrorHandler<User> = (errors) => {
		if(errors.password)  toast.error(errors.password.message); 
		if(errors.username)  toast.error(errors.username.message); 
	};

	return (
		<Main >
			<Head>
				<title>NG - Login</title>
			</Head>
			<h1>Register</h1>

			<form onSubmit={handleSubmit(onFormSubmit, onFormError)}>
				<article>
					<p>username</p>
					<div>
						<input type="text" {...register('username')}/>
					</div>
				</article>

				<article>
					<p>password</p>
					<input type="password" {...register('password')}/>
				</article>
				<SubmitButton type="submit">Create</SubmitButton>
			</form>
		</Main>
	);
}