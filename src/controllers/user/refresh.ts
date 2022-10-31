import { Request, Response, NextFunction } from 'express';

import { validationRefreshToken } from '../../middlewares/validation/validationToken';

import createToken from '../../utils/createToken';
import checkToken from '../../utils/checkToken';
import config from '../../utils/config';

import { statuses } from '../../errors/errorStatuses';
import { userErr, authErr } from '../../errors/errorMessages';

const {
  secretKey,
  secretKeyLife,
  refreshSecretKey,
  refreshSecretKeyLife,
} = config;

const { SUCCESS_OK, ERROR_CODE, ERROR_AUTH } = statuses;
const { ValidationTokenErrMessages } = userErr;
const { AuthRequiredErrMessages } = authErr;

const refresh = async (req: Request, res: Response, next: NextFunction) => {
  const { refresh_token } = req.body;
  const result = validationRefreshToken(refresh_token);

  if (!result) {
    res.status(ERROR_CODE).send({ message: ValidationTokenErrMessages });
  }

  const { check, id } = await checkToken({
    refresh: true,
    token: refresh_token,
  });

  if (check && !!id) {
    const success_token: string = createToken(id, secretKey, secretKeyLife);
    const refresh_token: string = createToken(id, refreshSecretKey, refreshSecretKeyLife);

    res.status(SUCCESS_OK).send({ success_token, refresh_token })
  } else {
    res.status(ERROR_AUTH).send({ message: AuthRequiredErrMessages })
  }

  next();
};

export default refresh;
