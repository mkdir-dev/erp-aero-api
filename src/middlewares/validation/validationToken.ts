import { Joi } from 'celebrate';

const validationToken = (body: { refresh_token: string }): boolean => {
  const { error } = Joi.object({
    refresh_token: Joi.string().regex(/^[\w-]+\.[\w-]+\.[\w-]+$/).min(150).required()
  }).validate(body);

  return !error;
}

export default validationToken;
