"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverErr = exports.authErr = exports.userErr = void 0;
exports.userErr = {
    BadRequestErrMessages: 'Переданы некорректные данные пользователя',
    ValidationErrMessages: 'Ошибка валидации при создании пользователя',
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
