const express=require('express');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const blogModel = require('../models/blog.model');
const auth = require('../middlewares/user.authentication.middleware');
const blog=express.Router();

// get
blog.get('/',auth,async(req,res)=>{
    try {
        const data=await blogModel.aggregate([{$match:{userId:req.body.userId}},{$sort:{_id:-1}}]);
        res.status(200).send(data);
    } catch (error) {
        res.status(501).send({'error':'failed to get the data'});
    }
});

// post
blog.post('/create',auth,async(req,res)=>{
    try {
        const new_blog=new blogModel(req.body);
        await new_blog.save();
        res.status(201).send({'success':'blog successfully created'});
    } catch (error) {
        res.status(501).send({'error':'failed to create the blog'});
    }
});

// patch
blog.patch('/update/:id',auth,async(req,res)=>{
    const blog=await blogModel.findById({_id:req.params.id});
    try {
        if(blog){
            await blogModel.findByIdAndUpdate({_id:req.params.id},req.body);
            res.status(200).send({'success':'blog is updated'});
        }else{
            res.status(404).send({'error':'blog does not exist'});
        }
    } catch (error) {
        res.status(501).send({'failed':'failed to update the blog'});
    }
});

// autosave
blog.patch('/autoSave',auth,async(req,res)=>{
    const blog=await blogModel.aggregate([{$match:{userId:req.body.userId}}, {$match:{title:req.body.title}},{$sort:{_id:-1}},{$limit:1}]);
    try {
        if(blog.length>0 && blog[0].no==req.body.no){
            await blogModel.findByIdAndUpdate({_id:blog[0]._id},req.body);
            res.status(200).send({'success':'blog is saved'});
        }else{
            const blog=new blogModel(req.body);
            await blog.save();
            res.status(201).send({'success':'blog is created'});
        }
    } catch (error) {
        res.status(501).send({'error':'failed to save the blog'});
    }
});


// delete
blog.delete('/delete/:id',auth,async(req,res)=>{
    const blog=await blogModel.findById({_id:req.params.id});
    try {
        if(blog){
            await blogModel.findByIdAndDelete({_id:req.params.id});
            res.status(200).send({'success':'blog is deleted'});
        }else{
            res.status(404).send({'error':'blog does not exist'});
        }
    } catch (error) {
        res.status(501).send({'failed':'failed to delete the blog'});
    }
})

module.exports=blog;