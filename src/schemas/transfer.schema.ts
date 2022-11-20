import Joi from 'joi';
import { Transfer } from '../interfaces/Transfer';

const transferSchema = Joi.object<Transfer>({
	username: Joi.string().min(3).required().messages({
		'string.min': 'Username must have at least 3 characters'
	}),
	value: Joi.string().required().messages({
		'string.empty': 'Must add a value'
	})
});

export {
	transferSchema
};