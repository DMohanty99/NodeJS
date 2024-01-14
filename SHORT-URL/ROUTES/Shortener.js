const {handleShortenUrl,handleGetLongURL,handleURLAnalytics} =require("../Controllers/Shortener")
const express =require("express");

const shorternerRouter=express.Router();

shorternerRouter.post("/",handleShortenUrl);

shorternerRouter.get("/:id",handleGetLongURL);

shorternerRouter.get("/Analytics/:id",handleURLAnalytics);

module.exports={shorternerRouter};
