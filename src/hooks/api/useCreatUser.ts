import { User } from '../../interfaces/User';
import { createUser as createUserApi } from '../../services/user.api';
import { useAsyncPost } from '../useAsyncPost';

const useCreateUser = () => {
	const {
		isSending: isSendingUser,
		asyncFunc: createUser
	} = useAsyncPost<typeof createUserApi>(createUserApi); 
	
	return {
		isSendingUser,
		createUser
	};
};

export{
	useCreateUser
};