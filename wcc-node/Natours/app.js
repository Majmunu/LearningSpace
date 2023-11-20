const express = require('express');
const morgan = require('morgan');
const app = express();
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
//中间件
app.use(express.json());
//自定义中间件
app.use((req, res, next) => {
  console.log('Hello from the middleware');
  req.requestTime = new Date().toISOString();
  next();
});

//第三方中间件
app.use(morgan('dev'));
//中间件
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
module.exports = app;
