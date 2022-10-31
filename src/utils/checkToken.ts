import jwt from "jsonwebtoken";

import config from './config';

import { ICheckToken } from '../interfaces/users/interfaces-users';

const {
  secretKey,
  refreshSecretKey,
} = config;

const checkToken = async (data: ICheckToken):
  Promise<{ check: boolean; id: string | null }> => {
  const { refresh, token } = data;

  try {
    const key = refresh ? refreshSecretKey : secretKey
    const payload = jwt.verify(token, key);

    return { check: true, id: (payload as { id: string }).id};
  } catch (err) {
    return { check: false, id: null};
  }
};

export default checkToken;