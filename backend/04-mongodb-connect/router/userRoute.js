import express from 'express';
import { getUserByEmail, postUser, patchUser, delUser } from '../src/controller/userController.js';

const userRouter = express.Router();

userRouter.route("/user").post(postUser);
userRouter.route("/user").get(getUserByEmail);
userRouter.route("/user").patch(patchUser);
userRouter.route("/user").delete(checkRole, delUser);

export default userRouter;