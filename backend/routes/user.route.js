const express=require('express');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const userModel = require('../models/user.model');
const user=express.Router();


// register route
user.post('/register',async(req,res)=>{
    const userFind=await userModel.findOne({email:req.body.email});
    try {
        if(userFind){
            res.status(501).send({'error':'this email address is already registerd'});
        }else{
            bcrypt.hash(req.body.password,5,async(err,hash)=>{
                if(hash){
                    const user=new userModel({name:req.body.name,email:req.body.email,password:hash});
                    await user.save();
                    res.status(201).send({'success':'account is created'});
                }else{
                    res.status(501).send({'error':'failed to hash the password'});
                }
            })
        }
        
    } catch (error) {
        res.status(501).send({'error':'failed to create the account'});
    }
})

// login route
user.post('/login',async(req,res)=>{
    try {
        const user=await userModel.findOne({email:req.body.email});
        bcrypt.compare(req.body.password,user.password,(err,result)=>{
            if(result){
                const token=jwt.sign({userId:user._id,name:user.name},'decodeKey');
                res.status(200).send({'success':'login successful','token':token});
            }else{
                res.status(401).send({'failed':'worng password'});
            }
        })
    } catch (error) {
        res.status(501).send({'error':'user does not exist'});
    }
})

module.exports=user;