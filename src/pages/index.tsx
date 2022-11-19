import Head from 'next/head';
import React, { useContext, useEffect } from 'react';
import { Main, SubmitButton } from '../styles/Auth/auth';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import {joiResolver} from '@hookform/resolvers/joi';
import { authSchema } from '../schemas/auth.schema';
import {toast} from 'react-toastify';
import { useRouter } from 'next/router';
import { User } from '../interfaces/User';
import { useSigninUser } from '../hooks/api/useSigninUser';
import { TokenContext } from '../context/TokenContext';



export default function Login() {
	const {register,handleSubmit} = useForm<User>({
		resolver: joiResolver(authSchema),
		criteriaMode: 'all'
	});

	const router = useRouter();
	const {setToken} = useContext(TokenContext);

	const {
		siginIsSending,
		userToken,
		singinUser
	} = useSigninUser();

	useEffect(() => {
		setToken(userToken);
	}, [userToken]);
	
	
	const onFormSubmit: SubmitHandler<User> = async  (data) => {
		try {
			await singinUser({username: data.username, password: data.password});
			toast.success('Welcome to NG_CASH');
			router.push('/wallet');
		} catch (e) {
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
		</Main>
	);
}
