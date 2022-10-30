import jwt from "jsonwebtoken";

const createToken = (
  id: string,
  secretKey: string,
  expiresIn: number,
): string => jwt.sign({ id }, secretKey, { expiresIn });

export default createToken;