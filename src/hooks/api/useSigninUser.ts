import { User } from '../../interfaces/User';
import { signinUser as signinUserApi } from '../../services/user.api';
import { useAsyncPost } from '../useAsyncPost';

const useSigninUser = () => {
	const  {
		asyncFunc: singinUser,
		isSending: siginIsSending,
		data: userToken
	}= useAsyncPost<typeof signinUserApi>(signinUserApi);

	return {
		singinUser,
		siginIsSending,
		userToken
	};
};

export {
	useSigninUser
};