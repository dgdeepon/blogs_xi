const express=require('express');
const app=express();
const cors=require('cors');
const connection = require('./config/db');
const user = require('./routes/user.route');
const blog = require('./routes/blog.route');

// cors
app.use(cors());

// json convert
app.use(express.json());

// user login and register routes
app.use('/user',user);

// blog routes
app.use('/blog',blog);




app.listen(8080,async()=>{
    try{
        await connection;
        console.log('data base is connected');
        console.log('server port is 8080');
    }catch(err){
        console.log('failed to connect the db');
    }
})