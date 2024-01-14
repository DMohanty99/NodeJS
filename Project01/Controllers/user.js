const { jsonObj } = require("../Models/user");
const fs= require("fs");

function handleGetAllUsers(req,res)
{
    console.log(req.headers);
    res.setHeader("X-MyCustomHeader","example");
    return res.json(jsonObj);
}

function handleGetUserById(req,res)
{
    const temp=jsonObj.find((user)=>user.id===Number(req.params.id));
    if(temp==null) res.status(404).send("not found");
    return res.json(temp);
}

function handleAddUser(req,res){
    const body =req.body;
    if(!body || !body.name){
        return res.status(400).send("incomplete request");
    }
    jsonObj.push({...body,id:jsonObj[jsonObj.length-1]["id"]-1});
    fs.writeFile("users.json",JSON.stringify(jsonObj),(err,data)=>{
        return res.status(201).send("success"+jsonObj[jsonObj.length-1]["id"]);
    })
}

module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleAddUser,
}