import Head from 'next/head';
import Router from 'next/router';
import {toast} from 'react-toastify';
import React, { useContext } from 'react';
import {joiResolver} from '@hookform/resolvers/joi';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';

import { User } from '../interfaces/User';
import { authSchema } from '../schemas/auth.schema';
import { AuthContext } from '../context/AuthContext';
import { Main, SubmitButton } from '../styles/Auth/auth';
import Link from 'next/link';


export default function Login() {
	const {register,handleSubmit} = useForm<User>({
		resolver: joiResolver(authSchema),
		criteriaMode: 'all'
	});

	const {signin} = useContext(AuthContext);
	
	
	const onFormSubmit: SubmitHandler<User> = async  (data) => {
		try {
			await signin({username: data.username, password: data.password});
			toast.success('Welcome to NG_CASH');
			Router.push('/wallet');
		} catch (e:any) {
			console.log(e);
			toast.error(e.response.data.message);
			toast.error('Could not login user');
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
			<h1>Login</h1>

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
				<SubmitButton type="submit">Send</SubmitButton>
			</form>
			<Link href='/signup'>
				<section className='link'>Create account</section>
			</Link>
		</Main>
	);
}
