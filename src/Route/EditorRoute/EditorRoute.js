const mongoose=require('mongoose');
const express=require("express");
const router=express.Router();
const {postProductController,getProductController}=require('../../Controller/Editor/EditorController');
router.post('/addProduct',postProductController);
router.get('/getAllProduct',getProductController);



module.exports=router;