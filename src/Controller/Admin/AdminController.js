
const mongoose=require("mongoose")
const userSchema=require("../../Model/Admin/user.js");

const User=new mongoose.model("User", userSchema);


const postUserController=async(req,res)=>{
    try{
       const editors=new User({
        name:req.body.name,
       })      
       
       await editors.save();
       res.status(200).json({
        message:"successfull created"
       });
    }

    catch(error){
        res.status(500).json({
            message:"failed"
        })
    }


}

const getAllUserController=async(req,res)=>{
    try{

        const data=await User.find();
        res.status(200).json({
            data,
            message:"all data is displayed"
        })
    }
    catch(error){
        res.status.json({
            message:"there is an error",
        })
    }

}


module.exports={
    postUserController,
    getAllUserController,
}