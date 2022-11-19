import { createContext, Dispatch, PropsWithChildren, SetStateAction, useState } from 'react';

interface ITokenContext{
	token: string | null
	setToken: Dispatch<string | null>
}

const TokenContext = createContext<ITokenContext>({} as ITokenContext);


const TokenProvider: React.FC<PropsWithChildren> = ({children}) => {
	const [token, setToken] = useState<ITokenContext['token']>(null);

	return (
		<TokenContext.Provider value={{setToken, token}}>
			{children}
		</TokenContext.Provider>
	);
};

export{
	TokenContext,
	TokenProvider
};