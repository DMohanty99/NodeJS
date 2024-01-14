const express= require("express");
//versioning :- majorUpdate(breaking update).minorUpdate(recommended update).patchUpdate(small Bug Fix)
//^ dont update the major vesion but the minor and bug fix releases can be changed
//~ major and minor (first and second places) are fixed
//3.18.x
app=express();

app.get('/',(req,res)=>{
    return res.send("welcome to home page");
});

app.get('/about',(req,res)=>{
   return  res.send("welcome to "+req.query.name);
});

app.listen(8000,()=>console.log("server started"));
