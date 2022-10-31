import { Request, Response, NextFunction } from 'express';

import getUser from '../../models/user/getUser';

import checkToken from '../../utils/checkToken';

import { statuses } from '../../errors/errorStatuses';
import { userErr } from '../../errors/errorMessages';

import { IUser } from '../../interfaces/users/interfaces-users';

const { SUCCESS_OK, ERROR_NOT_FOUND } = statuses;
const { NotFoundErrMessages } = userErr;

const getUserInfo = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  const id = (req as unknown as { user: string }).user;
  const token = authorization ? authorization.replace('Bearer ', '') : '';
  const { check } = await checkToken({ token });

  if (!check) {
    res.status(ERROR_NOT_FOUND).send({ message: NotFoundErrMessages })
  }
  
  await getUser(id)
    .then((users) => {
      const userId: string = (users as IUser[])[0].id;

      res.status(SUCCESS_OK).send({ id: userId })
    })
    .catch(() => res.status(ERROR_NOT_FOUND).send({ message: NotFoundErrMessages }))
  .catch(next);
};

export default getUserInfo;
