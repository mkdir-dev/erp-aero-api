import express from "express";

import signup from "../controllers/user/signup";
import signin from "../controllers/user/signin";
import refresh from "../controllers/user/refresh";
import getUserInfo from "../controllers/user/getUserInfo";

import auth from "../middlewares/auth";

const usersRouter = express.Router();

usersRouter.post('/signup', signup);
usersRouter.post('/signin', signin);
usersRouter.post('/signin/new_token', refresh);
usersRouter.get('/info', auth, getUserInfo);

export default usersRouter;