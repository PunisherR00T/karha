const express = require('express')
const { SignUp, SignIn } = require('../Controllers/User')
const { isAuth } = require('../Midlewares/isAuth')
const { registervalidation, loginvalidation } = require('../Midlewares/RegisterValidator')

const userRouter = express.Router()

userRouter.post('/SignUp',SignUp,registervalidation)
userRouter.post('/SignIn',SignIn,loginvalidation)
userRouter.get('GetUser',(req,res)=>res.send(req.user),isAuth)

module.exports = userRouter