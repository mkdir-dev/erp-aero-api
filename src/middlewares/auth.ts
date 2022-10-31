import { Request, Response, NextFunction } from 'express';

import checkToken from '../utils/checkToken';

import { statuses } from '../errors/errorStatuses';
import { authErr } from '../errors/errorMessages';

import { IPayload } from '../interfaces/users/interfaces-users';

const { ERROR_AUTH } = statuses;
const { AuthRequiredErrMessages } = authErr;

const auth = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    res.status(ERROR_AUTH).send({ message: AuthRequiredErrMessages })
  }

  const token = authorization ? authorization.replace('Bearer ', '') : '';

  const payload = await checkToken({ token });

  if (!payload.check) {
    res.status(ERROR_AUTH).send({ message: AuthRequiredErrMessages })
  }

  if (payload.id && payload.exp) {
    (req as unknown as { user: { id: string; exp: number }}).user =
      { id: payload.id, exp: payload.exp ? payload.exp : 0 };
  } else {
    res.status(ERROR_AUTH).send({ message: AuthRequiredErrMessages })
  }

  next();
};

export default auth;