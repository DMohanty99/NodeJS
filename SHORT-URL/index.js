const express = require("express");
const {shorternerRouter}=require("./ROUTES/Shortener")
const {staticRouter}=require("./ROUTES/staticRouter")
const {userRouter}=require("./ROUTES/userRouter")
const cookieParser= require("cookie-parser");
const PORT=8000;
const path = require("path");
const app=express();
const {authMiddleware,simpleAuthMiddleware,jwtwAuthMiddleware,jwtwAuthMiddlewareHeaders,jwtwAuthorizationMiddlewareHeaders}=require("./middleware");
app.use(cookieParser());
app.use(express.urlencoded({extended:false}));
app.set("view engine","ejs");
app.set("views",path.resolve("./Views"));
app.get("/abc",(req,res)=>{
    return res.render('home',{
        name:"dinesh",
    })
    //end("abc");
})
app.use("/",simpleAuthMiddleware,staticRouter);
app.use("/usr",userRouter);
app.use(jwtwAuthMiddleware);
//app.use("/URL",authMiddleware,shorternerRouter);
app.use("/URL",shorternerRouter);



app.listen(PORT,()=>{console.log("server started")});