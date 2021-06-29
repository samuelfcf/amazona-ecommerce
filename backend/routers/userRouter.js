import express from 'express';
import expressAsynHandler from 'express-async-handler'
import data from '../data.js';
import User from '../models/userModel.js';

const userRouter = express.Router();

userRouter.get("/seed", expressAsynHandler(async (request, response) => {
  const createdUsers = await User.insertMany(data.users);
  response.send({createdUsers});
}))

export default userRouter;