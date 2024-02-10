import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
  MONGODB: Joi.required(),
  PORT: Joi.number().default(3006),
  DEFAULT_LIMIT: Joi.number().default(11),
  NODE_ENV: Joi.string(),
});
