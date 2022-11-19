import { AxiosError, AxiosResponse,  } from 'axios';
import { any } from 'joi';
import { useEffect, useState } from 'react';

type AsyncFuncType = (...args: any[]) => Promise<any>;


const useAsyncPost =  <T extends AsyncFuncType>(fetchFunction: T ) => {

	const [isSending, setIsSending] = useState(false);
	const [data, setData] = useState< Awaited<ReturnType<T>> | null>(null);
	
	const asyncFunc = async (...args: Parameters<T>): Promise<void> => {
		setIsSending(true);
		try {
			const dataResponse: Awaited<ReturnType<T>> = await fetchFunction(...args);
			setData(dataResponse);
			setIsSending(false);
		} catch (e: any) {
			setData(null);
			setIsSending(false);
			throw e;
		}

	};

	return {
		isSending,
		asyncFunc,
		data
	};
};

export {
	useAsyncPost,
};