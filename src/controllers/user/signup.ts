import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';

import createUser from '../../models/user/createUser';
import validateUser from '../../middlewares/validation/validationUser';

import { statuses } from '../../errors/errorStatuses';
import { userErr, serverErr } from '../../errors/errorMessages';

const { SUCCESS_OK, ERROR_CODE, ERROR_CONFLICT, ERROR_SERVER } = statuses;
const { ValidationSignUpErrMessages, ConflictErrMessages } = userErr;
const { InternalServerErrMessages } = serverErr;

const signup = async (req: Request, res: Response, next: NextFunction) => {
  const { id, password } = req.body;
  const result = validateUser(req.body);

  if (!result) {
    res.status(ERROR_CODE).send({ message: ValidationSignUpErrMessages });
  }

  await bcrypt.hash(password, 10)
    .then(async (hash) => {
      await createUser(id, hash)
        .then(() => res.status(SUCCESS_OK).send({ message: `Пользователь ${id} создан` }))
        .catch(() => res.status(ERROR_CONFLICT).send({ message: ConflictErrMessages }));
    })
    .catch(() => res.status(ERROR_SERVER).send({ message: InternalServerErrMessages }))
  .catch(next);
};

export default signup;
