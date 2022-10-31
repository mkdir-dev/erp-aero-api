import { Joi } from 'celebrate';

const validationUser = (body: { id: string, password: string }): boolean => {
  const { error } = Joi.object({
    id: Joi.alternatives(
      Joi.string().email().min(8).max(80).required(),
      Joi.string()
        .regex(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/)
        .required()
    ).required(),
    password: Joi.string().regex(/(?=.*[a-z])/).min(8).required()
  }).validate(body);

  return !error;
}

export default validationUser;