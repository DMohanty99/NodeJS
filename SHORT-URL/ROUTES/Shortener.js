const {handleShortenUrl,handleGetLongURL,handleURLAnalytics,handleUrlAdmin} =require("../Controllers/Shortener")
const {jwtwAuthorizationMiddlewareHeaders}=require("../middleware");
const express =require("express");

const shorternerRouter=express.Router();

shorternerRouter.post("/",handleShortenUrl);

shorternerRouter.get("/admin",jwtwAuthorizationMiddlewareHeaders("ADMIN"),handleUrlAdmin);

shorternerRouter.get("/:id",handleGetLongURL);

shorternerRouter.get("/Analytics/:id",handleURLAnalytics);

module.exports={shorternerRouter};
