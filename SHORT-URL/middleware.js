const {validateToken,getUserFromUuid} =require("./Services/auth");
function authMiddleware(req,res,next){
    
    const uuid= req.cookies?.sessionId;
    console.log("uuid",uuid);
    if(!uuid) return res.redirect("/login");
    console.log(uuid);
    const uuidUser=getUserFromUuid(uuid);
    console.log(uuidUser);
    if(!uuidUser) return res.redirect("/login");
    req.user=uuidUser;
    next();
}
function simpleAuthMiddleware(req,res,next){
    
    const uuid= req.cookies?.sessionId;
    const uuidUser=getUserFromUuid(uuid);
    req.user=uuidUser;
    next();
}
function jwtwAuthMiddleware(req,res,next){
    
    const uuid= req.cookies?.sessionId;
    const uuidUser=getUserFromUuid(uuid);
    req.user=uuidUser;
    //console.log(req);
    const token= req.cookies?.token;
    if(uuidUser&& token && validateToken(token))
    next();
    else 
    return res.redirect("/login");
}

function jwtwAuthMiddlewareHeaders(req,res,next){
    
    const uuid= req.cookies?.sessionId;
    const uuidUser=getUserFromUuid(uuid);
    req.user=uuidUser;
    console.log(req.headers);
    const token= req.headers["authorization"].split("Bearer ")[1];
    if(uuidUser&& token && validateToken(token))
    next();
    else 
    return res.redirect("/login");
}
module.exports={authMiddleware,simpleAuthMiddleware,jwtwAuthMiddleware,jwtwAuthMiddlewareHeaders};