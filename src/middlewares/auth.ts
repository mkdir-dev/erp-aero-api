import { Request, Response, NextFunction } from 'express';

import checkToken from '../utils/checkToken';

import { statuses } from '../errors/errorStatuses';
import { authErr } from '../errors/errorMessages';

const { ERROR_AUTH } = statuses;
const { AuthRequiredErrMessages } = authErr;

const auth = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    res.status(ERROR_AUTH).send({ message: AuthRequiredErrMessages })
  }

  const token = authorization ? authorization.replace('Bearer ', '') : '';

  const { check, id } = await checkToken({ token });

  if (!check) {
    res.status(ERROR_AUTH).send({ message: AuthRequiredErrMessages })
  }

  if (id) {
    (req as unknown as { user: string }).user = id;
  } else {
    res.status(ERROR_AUTH).send({ message: AuthRequiredErrMessages })
  }

  next();
};

export default auth;