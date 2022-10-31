"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverErr = exports.authErr = exports.userErr = void 0;
exports.userErr = {
    BadRequestErrMessages: 'Переданы некорректные данные пользователя',
    ValidationSignUpErrMessages: 'Ошибка валидации при создании пользователя',
    ValidationSignInErrMessages: 'Ошибка валидации при входе',
    ValidationTokenErrMessages: 'Ошибка валидации токена',
    NotFoundErrMessages: 'Запрашиваемый пользователь не найден',
    ConflictErrMessages: 'Пользователь с таким ID уже зарегистрирован',
};
exports.authErr = {
    UnauthorizedErrMessages: 'Ошибка аутентификации',
    AuthRequiredErrMessages: 'Необходима авторизация',
    UnauthDataErrMessages: 'Неверные данные',
};
exports.serverErr = {
    NotFoundErrMessages: 'Запрашиваемый ресурс не найден',
    InternalServerErrMessages: 'Ошибка сервера. Ошибка по-умолчанию',
    ServerErrMessages: 'На сервере произошла ошибка',
};
