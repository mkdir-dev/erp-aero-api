"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const signup_1 = __importDefault(require("../controllers/user/signup"));
const signin_1 = __importDefault(require("../controllers/user/signin"));
const refresh_1 = __importDefault(require("../controllers/user/refresh"));
const usersRouter = express_1.default.Router();
usersRouter.post('/signup', signup_1.default);
usersRouter.post('/signin', signin_1.default);
usersRouter.post('/signin/new_token', refresh_1.default);
exports.default = usersRouter;
