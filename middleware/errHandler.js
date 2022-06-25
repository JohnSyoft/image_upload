const express=require('express')
const errHandler=(err,req,res,next)=>{
    if(err){
        res.status(res.statusCode).json(err.message)
    }
}
module.exports=errHandler