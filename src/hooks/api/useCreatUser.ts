import { User } from '../../pages';
import { createUser as createUserApi } from '../../services/user.api';
import { useAsyncPost } from '../useAsyncPost';

const useCreateUser = () => {
	const {
		isSending: isSendingUser,
		asyncFunc: createUser
	} = useAsyncPost<User>(createUserApi); 
	
	return {
		isSendingUser,
		createUser
	};
};

export{
	useCreateUser
};