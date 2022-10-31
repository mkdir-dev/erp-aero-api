import jwt from "jsonwebtoken";

import config from './config';

import { ICheckToken, IPayload } from '../interfaces/users/interfaces-users';

const {
  secretKey,
  refreshSecretKey,
} = config;

const checkToken = async (data: ICheckToken):
  Promise<IPayload> => {
  const { refresh, token } = data;

  try {
    const key = refresh ? refreshSecretKey : secretKey
    const payload = jwt.verify(token, key);

    return {
      check: true,
      id: (payload as IPayload).id,
      iat: (payload as IPayload).iat,
      exp: (payload as IPayload).exp,
    };
  } catch (err) {
    return {
      check: false,
      id: null,
      iat: null,
      exp: null,
    };
  }
};

export default checkToken;