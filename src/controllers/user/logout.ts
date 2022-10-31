import { Request, Response, NextFunction } from 'express';

import blockToken from '../../models/user/blockToken';

import { statuses } from '../../errors/errorStatuses';
import { serverErr } from '../../errors/errorMessages';

const { SUCCESS_OK, ERROR_SERVER } = statuses;
const { InternalServerErrMessages } = serverErr;

const logout = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  const { exp } = (req as unknown as { user: { exp: number }}).user;
  const token = authorization ? authorization.replace('Bearer ', '') : '';
  const date = new Date(exp * 1000);

  await blockToken(token, date)
    .then(() => res.status(SUCCESS_OK).send({ message: 'Вы вышли из приложения' }))
    .catch(() => res.status(ERROR_SERVER).send({ message: InternalServerErrMessages }))
  .catch(next)
};

export default logout;
