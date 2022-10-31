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
const validationToken_1 = __importDefault(require("../../middlewares/validation/validationToken"));
const createToken_1 = __importDefault(require("../../utils/createToken"));
const checkRefreshToken_1 = __importDefault(require("../../utils/checkRefreshToken"));
// checkRefreshToken
const config_1 = __importDefault(require("../../utils/config"));
const errorStatuses_1 = require("../../errors/errorStatuses");
const errorMessages_1 = require("../../errors/errorMessages");
const { secretKey, secretKeyLife, refreshSecretKey, refreshSecretKeyLife, } = config_1.default;
const { SUCCESS_OK, ERROR_CODE, ERROR_AUTH } = errorStatuses_1.statuses;
const { ValidationTokenErrMessages, NotFoundErrMessages } = errorMessages_1.userErr;
const { ServerErrMessages } = errorMessages_1.serverErr;
const { AuthRequiredErrMessages } = errorMessages_1.authErr;
const refresh = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { refresh_token } = req.body;
    const result = (0, validationToken_1.default)(req.body);
    if (!result) {
        res.status(ERROR_CODE).send({ message: ValidationTokenErrMessages });
    }
    const { check, id } = yield (0, checkRefreshToken_1.default)(refresh_token);
    if (check && !!id) {
        const success_token = (0, createToken_1.default)(id, secretKey, secretKeyLife);
        const refresh_token = (0, createToken_1.default)(id, refreshSecretKey, refreshSecretKeyLife);
        res.status(SUCCESS_OK).send({ success_token, refresh_token });
    }
    else {
        res.status(ERROR_AUTH).send({ message: AuthRequiredErrMessages });
    }
    /*
    let payload;
  
    try {
      payload = jwt.verify(
        refresh_token,
        refreshSecretKey,
      );
  
      res.status(200).send({ payload });
    } catch (err) {
      // throw new UnauthorizedError('Необходима авторизация');
      res.status(ERROR_AUTH).send({ message: AuthRequiredErrMessages });
    }
  
    if (payload)
    */
    next();
    /*
    await getUser(id)
      .then((users) => {
        const userId: string = (users as IUser[])[0].id;
        const userPass: string = (users as IUser[])[0].password;
  
        const comparePass: boolean = bcrypt.compareSync(password, userPass);
  
        if (comparePass) {
          const success_token: string = createToken(userId, secretKey, secretKeyLife);
          const refresh_token: string = createToken(userId, refreshSecretKey, refreshSecretKeyLife);
  
          res.status(SUCCESS_OK).send({ success_token, refresh_token })
        }
        res.status(ERROR_SERVER).send({ message: ServerErrMessages });
      })
      .catch(() => res.status(ERROR_NOT_FOUND).send({ message: NotFoundErrMessages }))
    .catch(next);
    */
});
exports.default = refresh;
