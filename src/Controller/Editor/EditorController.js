const mongoose=require("mongoose");
const productSchema=require("../../Model/Editor/product.js");
const allProducts=new mongoose.model("allProducts",productSchema)

const postProductController=async(req,res)=>{
    try{
     const products=new allProducts({
        productName:req.body.productName,
        quantity:req.body.quantity,
     })

     await products.save()
     res.status(200).json({
        message:"successfully add an product"
     })

    }
    catch(error){
        res.status(500).json({
            message:'there was an error'
        })
    }
}

const getProductController=async(req,res)=>{
  try{
    const allDataProducts= await allProducts.find();
    res.status(200).json({
        allDataProducts,
        message:"success"
    })
} 
catch(error){
    res.status(500).json({
        message:"there is an error"
    })
}
}

module.exports={
    postProductController,
    getProductController,
}