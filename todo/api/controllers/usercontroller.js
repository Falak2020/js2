const router=require('express').Router()
const userModel=require('../models/users/usermodel')

router.post('/register',userModel.registerUser)
router.post('/login',userModel.loginUser)

module.exports=router