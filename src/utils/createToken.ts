import jwt from "jsonwebtoken";

const createToken = (
  id: string,
  secretKey: string,
  expiresIn: string,
): string => jwt.sign({ id }, secretKey, { expiresIn });

export default createToken;