import Head from 'next/head';
import React from 'react';
import { Main, SubmitButton } from '../styles/Auth/auth';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import {joiResolver} from '@hookform/resolvers/joi';
import { authSchema } from '../schemas/auth.schema';
import {toast} from 'react-toastify';
import { useCreateUser } from '../hooks/api/useCreatUser';

export interface User {
	username:string,
	password: string
}


export default function Login() {
	const {register,handleSubmit} = useForm<User>({
		resolver: joiResolver(authSchema),
		criteriaMode: 'all'
	});


	const {
		isSendingUser,
		createUser
	} = useCreateUser();

	//console.log('loading',isSendingUser);
	
	
	const onFormSubmit: SubmitHandler<User> = async  (data) => {
		try {
			await createUser({username: data.username, password: data.password});
			toast.success('User created successfully');
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
			<h1>cadastro</h1>

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
