const jwt=require('jsonwebtoken');


const auth=(req,res,next)=>{
    const token=req.headers.authorization?.split(' ')[1];
    if(token){
        jwt.verify(token,'decodeKey',(err,decode)=>{
            if(decode){
                req.body.userId=decode.userId;
                next();
            }else{
                res.status(501).send({'error':'invalid token'});
            }
        });
    }else{
        res.status(401).send({'error':'token is missing'});
    }
}

module.exports=auth;