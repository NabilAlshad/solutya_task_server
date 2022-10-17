const mongoose=require("mongoose");
const productSchema=mongoose.Schema({
    productName:{
        type:String,
        required:true
    },
    quantity:{
        type:String,
        required:true
    }
})

module.exports=productSchema;
