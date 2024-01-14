const express =require("express");
const { v4: uuidv4 } = require('uuid');
const userRouter=express.Router();
const userJsonObj=require("../UserStore.json")
const fs =require("fs");
const {setUuidToUser,setjwtToken} =require("../Services/auth");

userRouter.post("/signup",(req,res)=>{
    const {userName,email,password}=req.body;
    let id= userJsonObj.length+1;
    let tempJson={userName:userName, email:email,
    password:password,id:id};
    userJsonObj.push(tempJson);
    console.log(userJsonObj);
        fs.writeFile("./UserStore.json",JSON.stringify(userJsonObj),(err,data)=>{
            return res.redirect("/login");
        })

})

userRouter.post("/login",(req,res)=>{
    const {email,password}=req.body;
    for(let i=0;i<userJsonObj.length;i++){
        if(userJsonObj[i].email==email){
            if(userJsonObj[i].password==password)
            {
                const uuid=uuidv4();
                setUuidToUser(uuid,userJsonObj[i]);

                res.cookie("sessionId",uuid);
                res.cookie("token",setjwtToken(userJsonObj[i]));
                
                return res.redirect("/");
            }
        }
    }
    return res.render("login",{err:"wrong user Id or password"});
    
})

module.exports={userRouter};