const express=require("express");
const mongoose=require("mongoose");
const router=express.Router();
const {postUserController,getAllUserController}=require('../../Controller/Admin/AdminController');

router.post('/addUser',postUserController);
router.get('/getAllUser', getAllUserController)

module.exports=router;