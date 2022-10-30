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
const getUser_1 = __importDefault(require("../../models/user/getUser"));
const validationUser_1 = __importDefault(require("../../middlewares/validation/validationUser"));
const createToken_1 = __importDefault(require("../../utils/createToken"));
const config_1 = __importDefault(require("../../utils/config"));
const errorStatuses_1 = require("../../errors/errorStatuses");
const errorMessages_1 = require("../../errors/errorMessages");
const { secretKey, secretKeyLife, refreshSecretKey, refreshSecretKeyLife, } = config_1.default;
const { ERROR_CODE } = errorStatuses_1.statuses;
const { ValidationErrMessages } = errorMessages_1.userErr;
const signin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, password } = req.body;
    const result = (0, validationUser_1.default)(req.body);
    if (!result) {
        res.status(ERROR_CODE).send({ message: ValidationErrMessages });
    }
    const users = yield (0, getUser_1.default)(id);
    const userId = users[0].id;
    const userPass = users[0].password;
    const comparePass = bcryptjs_1.default.compareSync(password, userPass);
    if (comparePass) {
        const success_token = (0, createToken_1.default)(userId, secretKey, secretKeyLife);
        const refresh_token = (0, createToken_1.default)(userId, refreshSecretKey, refreshSecretKeyLife);
        console.log('success_token', success_token);
        console.log('refresh_token', refresh_token);
        /*
        res.status(200).send({
          success_token,
          refresh_token
        })
        */
    }
    res.status(500).send({ message: 'asd' });
});
exports.default = signin;
