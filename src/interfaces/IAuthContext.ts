import { User } from './User';

export interface IAuthContext{
	signin: (user: User) => Promise<void>
}
