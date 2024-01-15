let uuidToUserMap= new Map();
const jwt =require("jsonwebtoken");
const secretKey="dinsesh@1!@"
function setUuidToUser(uuid,user){
    uuidToUserMap.set(uuid,user);
    return uuid;
}

function getUserFromUuid(uuid){
    return uuidToUserMap.get(uuid);
}
function setjwtToken(user){
   return jwt.sign({id:user.id,email:user.email},secretKey);

}
function validateToken(token){
    console.log(jwt.verify(token,secretKey));
    return jwt.verify(token,secretKey);
}
module.exports={setUuidToUser,getUserFromUuid,setjwtToken,validateToken}