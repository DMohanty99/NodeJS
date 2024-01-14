const fs = require("fs");
let {jsonObj}= require("../Models/Shortener");

function handleShortenUrl(req,res)
{
    let body=req.body;
    let url =body.url;
    const existingEntry=jsonObj.find((entry)=>entry.url==url);
    if(existingEntry){
        res.status(200).json({"status":"url already there","short-url":existingEntry.id});
    }
    else{
        const newEntry={"url":url, "id":jsonObj.length+1,"count":0,"createdBy":req.user.id};
        jsonObj.push(newEntry);
        fs.writeFile("./Store.json",JSON.stringify(jsonObj),(err,data)=>{
            return res.render("home",{
                id:newEntry.id,
                jsonObj:jsonObj,
                userId:req.user.id
            })
        })
    }
}

function handleGetLongURL(req,res){
    const id =req.params.id;
    const idEntry=jsonObj.find((entry)=>entry.id==id);
    for(let i=0;i<jsonObj.length;i++){
        if(jsonObj[i].id==id){
            jsonObj[i].count+=1;
        }
    }
    if(idEntry){
        fs.writeFile("./Store.json",JSON.stringify(jsonObj),(err,data)=>{
            return res.status(200).redirect(idEntry.url);
            //render('home');
            //send({"LongURL":idEntry.url});
        })
        
    }
    else{
        return res.status(404).json({"error":"invalid short URL"});
    }
}
function handleURLAnalytics(req,res){
    const id=req.params.id;
    const idEntry=jsonObj.find((entry)=>entry.id==id);

    if(idEntry){
        return res.status(200).json({"LongURL":idEntry.url,"count":idEntry.count});
    }
    else{
        return res.status(404).json({"error":"invalid short URL"});
    }

}

module.exports={
    handleShortenUrl,
    handleGetLongURL,
    handleURLAnalytics,

}