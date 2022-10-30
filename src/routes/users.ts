import express from "express";

import signup from "../controllers/user/signup";
import signin from "../controllers/user/signin";

const usersRouter = express.Router();

usersRouter.post('/signup', signup);
usersRouter.post('/signin', signin);

export default usersRouter;