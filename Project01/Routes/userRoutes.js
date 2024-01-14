const express = require("express")
const {handleGetAllUsers,handleGetUserById,handleAddUser} = require("../Controllers/user");
const userRoute= express.Router();

userRoute.get('/:id',handleGetUserById);
userRoute.route('/').get(handleGetAllUsers).post(handleAddUser);

module.exports={userRoute};