const mongodb= require('mongoose')
const bcrypt=require('bcrypt')
const User=require('../users/userSchema')
const auth=require('../../authentication/auth')
exports.registerUser =(req,res)=>{
    User.exists({email:req.body.email},(err,result)=>{
        if(err){
            return res.status(400).json(err)
        }else{
            if(result){
                return res.status(400).json({
                    statusCode:400,
                    status:false,
                    message:'Email address is already taken'
                })
            }
            else{

             const salt=bcrypt.genSaltSync(10)
             bcrypt.hash(req.body.password,salt,(err,hash)=>{
                 if(err){
                     return res.status(500).json({
                         statusCode:500,
                         statusCode:false,
                         message:'fell when encrypting'
                     })
                 }
                
                  const newuser= new User({
                    firstName:req.body.firstName,
                    lastName:req.body.lastName,
                    email:req.body.email,
                    passwordHash:hash
                })
                newuser.save()
                .then(()=>{
                    res.status(201).json({
                        statusCode:201,
                        status:true,
                        message:'User created successfully'
                    })
                
                })
                .catch(()=>{
                    res.status(500).json({
                        statusCode:500,
                        status:false,
                        message:'fail to create user'
                    })
                })
             }) 
               
            }
        }
    })
}


exports.loginUser=(req,res)=>{
    User.findOne({email:req.body.email})
    .then(user=>{
        if(user===null){
            return res.status(404).json({
                statusCode:404,
                status:false,
                message:'Incorrect email or password'
            })
        }
        try{
            bcrypt.compare(req.body.password,user.passwordHash,(err,result)=>{
                if(err){
                    return res.status(404).json(err)
                }else{
                    if(result){
                        return res.status(200).json({
                            statusCode:200,
                            status:true,
                            message:'Authentication successful',
                            token:auth.generateToken(user._id),
                            username:user.firstName
                        })
                    }
                    res.status(401).json({//fel authentication
                        statusCode:401,
                        status:false,
                        message:'Incorrect email or password'
                    })
                }
            })
        
        }
        catch{
            return res.status(500).json({
                statusCode:500,
                status:500,
                message:'Unable to authenticate user'
            })
        }
            
    })
}