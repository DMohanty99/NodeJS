const express =require("express");

const staticRouter=express.Router();
staticRouter.get("/",(req,res)=>{
return res.render('home',{
    userId:req.user?.id,
});
})

staticRouter.get("/signup",(req,res)=>{
    return res.render('SignUp');
})

staticRouter.get("/login",(req,res)=>{
    return res.render('Login');
})


module.exports={staticRouter};