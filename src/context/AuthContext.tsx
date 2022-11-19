import { createContext, Dispatch, PropsWithChildren, SetStateAction, useState } from 'react';
import { User } from '../interfaces/User';
import { signinUser } from '../services/user.api';
import { setCookie} from 'nookies';


interface IAuthContext{
	signin: (user: User) => Promise<void>
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);


const AuthProvider: React.FC<PropsWithChildren> = ({children}) => {

	async function signin({username, password}: User){
		const token = await signinUser({
			username,
			password
		});

		setCookie(undefined, 'ng-cash-token', token,{ 
			maxAge: 60 * 60 * 24 // 24h
		});
	}

	return (
		<AuthContext.Provider value={{signin}}>
			{children}
		</AuthContext.Provider>
	);
};

export{
	AuthContext,
	AuthProvider
};