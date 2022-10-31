export interface IUserErrMessages {
  BadRequestErrMessages: string,
  ValidationSignUpErrMessages: string,
  ValidationSignInErrMessages: string,
  ValidationTokenErrMessages: string,
  NotFoundErrMessages: string,
  ConflictErrMessages: string,
}

export interface IAuthErrMessages {
  UnauthorizedErrMessages: string,
  AuthRequiredErrMessages: string,
  UnauthDataErrMessages: string,
}

export interface IServerErrMessages {
  NotFoundErrMessages: string,
  InternalServerErrMessages: string,
  ServerErrMessages: string,
}
