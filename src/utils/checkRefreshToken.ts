import jwt from "jsonwebtoken";

import config from './config';

const { refreshSecretKey } = config;

const checkRefreshToken = async (refresh_token: string):
  Promise<{ check: boolean; id: string | null }> => {

  try {
    const payload = jwt.verify(refresh_token, refreshSecretKey);
    return { check: true, id: (payload as { id: string }).id};
  } catch (err) {
    return { check: false, id: null};
  }
};

export default checkRefreshToken;