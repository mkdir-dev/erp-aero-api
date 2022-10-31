import {
  IUserErrMessages,
  IAuthErrMessages,
  IServerErrMessages
} from '../interfaces/errors/interfaces-err-messages';

export const userErr: IUserErrMessages = {
  BadRequestErrMessages: 'Переданы некорректные данные пользователя',
  ValidationSignUpErrMessages: 'Ошибка валидации при создании пользователя',
  ValidationSignInErrMessages: 'Ошибка валидации при входе',
  ValidationTokenErrMessages: 'Ошибка валидации токена',
  NotFoundErrMessages: 'Запрашиваемый пользователь не найден',
  ConflictErrMessages: 'Пользователь с таким ID уже зарегистрирован',
};

export const authErr: IAuthErrMessages = {
  UnauthorizedErrMessages: 'Ошибка аутентификации',
  AuthRequiredErrMessages: 'Необходима авторизация',
  UnauthDataErrMessages: 'Неверные данные',
};

export const serverErr: IServerErrMessages = {
  NotFoundErrMessages: 'Запрашиваемый ресурс не найден',
  InternalServerErrMessages: 'Ошибка сервера. Ошибка по-умолчанию',
  ServerErrMessages: 'На сервере произошла ошибка',
};
