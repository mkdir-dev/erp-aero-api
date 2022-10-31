"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const createUser_1 = __importDefault(require("../../models/user/createUser"));
const validationUser_1 = __importDefault(require("../../middlewares/validation/validationUser"));
const errorStatuses_1 = require("../../errors/errorStatuses");
const errorMessages_1 = require("../../errors/errorMessages");
const { SUCCESS_OK, ERROR_CODE, ERROR_CONFLICT, ERROR_SERVER } = errorStatuses_1.statuses;
const { ValidationSignUpErrMessages, ConflictErrMessages } = errorMessages_1.userErr;
const { InternalServerErrMessages } = errorMessages_1.serverErr;
const signup = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, password } = req.body;
    const result = (0, validationUser_1.default)(req.body);
    if (!result) {
        res.status(ERROR_CODE).send({ message: ValidationSignUpErrMessages });
    }
    yield bcryptjs_1.default.hash(password, 10)
        .then((hash) => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, createUser_1.default)(id, hash)
            .then(() => res.status(SUCCESS_OK).send({ message: `Пользователь ${id} создан` }))
            .catch(() => res.status(ERROR_CONFLICT).send({ message: ConflictErrMessages }));
    }))
        .catch(() => res.status(ERROR_SERVER).send({ message: InternalServerErrMessages }))
        .catch(next);
});
exports.default = signup;
