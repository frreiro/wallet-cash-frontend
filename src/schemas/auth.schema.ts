import Joi from 'joi';
import { User } from '../pages';

const authSchema = Joi.object<User>({
	username: Joi.string().min(3).required().messages({
		'string.min': 'Username must have at least 3 characters'
	}),
	password: Joi.string().min(8).pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z$*&@#]{8,}$/).required().messages({
		'string.pattern.base': 'Password must have at least 8 characters, must contain a number, must contain an uppercase letter'
		
	})
});

export {
	authSchema
};