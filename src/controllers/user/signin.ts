import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';

import getUser from '../../models/user/getUser';

import validateUser from '../../middlewares/validation/validationUser';

import createToken from '../../utils/createToken';
import config from '../../utils/config';

import { statuses } from '../../errors/errorStatuses';
import { userErr, serverErr } from '../../errors/errorMessages';

import { IUser } from '../../interfaces/users/interfaces-users';

const {
  secretKey,
  secretKeyLife,
  refreshSecretKey,
  refreshSecretKeyLife,
} = config;

const { SUCCESS_OK, ERROR_CODE, ERROR_NOT_FOUND, ERROR_SERVER } = statuses;
const { ValidationErrMessages, NotFoundErrMessages } = userErr;
const { ServerErrMessages } = serverErr;

const signin = async (req: Request, res: Response, next: NextFunction) => {
  const { id, password } = req.body;
  const result = validateUser(req.body);

  if (!result) {
    res.status(ERROR_CODE).send({ message: ValidationErrMessages });
  }

  await getUser(id)
    .then((users) => {
      const userId: string = (users as IUser[])[0].id;
      const userPass: string = (users as IUser[])[0].password;

      const comparePass: boolean = bcrypt.compareSync(password, userPass);

      if (comparePass) {
        const success_token: string = createToken(userId, secretKey, secretKeyLife);
        const refresh_token: string = createToken(userId, refreshSecretKey, refreshSecretKeyLife);

        res.status(SUCCESS_OK).send({ success_token, refresh_token })
      }
      res.status(ERROR_SERVER).send({ message: ServerErrMessages });
    })
    .catch(() => res.status(ERROR_NOT_FOUND).send({ message: NotFoundErrMessages }))
  .catch(next);
};

export default signin;
