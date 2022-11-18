import Head from 'next/head';
import React from 'react';
import { Main, SubmitButton } from '../styles/Auth/auth';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import {joiResolver} from '@hookform/resolvers/joi';
import { authSchema } from '../schemas/auth.schema';
import {toast} from 'react-toastify';

export interface User {
	username:string,
	password: string
}


export default function Login() {
	const {register,handleSubmit} = useForm<User>({
		resolver: joiResolver(authSchema),
		criteriaMode: 'all'
	});

	const onFormSubmit: SubmitHandler<User> = (data) => {
		console.log(data);
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
