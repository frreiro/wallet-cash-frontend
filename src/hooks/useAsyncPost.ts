import { AxiosError, AxiosResponse,  } from 'axios';
import { any } from 'joi';
import { useEffect, useState } from 'react';


interface IUseAsyncPost {
	isSending: boolean;
	asyncFunc: (body?: any) => Promise<void>
}

const useAsyncPost =  <T extends unknown>(fetchFunction: (body?: T) => Promise<AxiosResponse | AxiosError>): IUseAsyncPost => {

	const [isSending, setIsSending] = useState(false);
	
	const asyncFunc = async (body?: T): Promise<void> => {
		setIsSending(true);
		try {
			await fetchFunction(body);
			setIsSending(false);
		} catch (e: any) {
			setIsSending(false);
			throw e;
		}

	};

	return {
		isSending,
		asyncFunc
	};
};

export {
	useAsyncPost,
};