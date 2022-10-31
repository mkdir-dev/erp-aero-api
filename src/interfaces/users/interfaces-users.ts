export interface IUser {
  id: string;
  password: string;
  pkey?: number;
  created_time?: Date;
};

export interface ICheckToken {
  refresh?: boolean,
  token: string,
}

export interface IPayload {
  check: boolean;
  id: string | null,
  iat: number | null,
  exp: number | null,
}