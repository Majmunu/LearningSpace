const express = require('express');
const userRouter = express.Router();
const userController = require('../controller/useController');
const { getAllUsers, addUser, getUser, updateUser, deleteUser } =
  userController;

// app.use('/api/v1/users', userRouter);
userRouter.route('/').get(getAllUsers).post(addUser);
userRouter.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);
module.exports = userRouter;
