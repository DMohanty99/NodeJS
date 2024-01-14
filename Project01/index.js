const express = require("express");
const {userRoute} =require("./Routes/userRoutes")

const app = express();
const PORT=8000;

app.use(express.urlencoded({extended:false}));
app.use("/api/users",userRoute);
app.get('/users',(req,res)=>{
    const html =
    `
    <ul>
        ${jsonObj.map((user)=>`<li>${user.name}</li>`).join("")}
        </ul>
        `;
    return res.send(
       html 
    );
})

app.listen(PORT,()=>console.log("server started"));