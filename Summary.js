import mongoose from "mongoose";
const schema=new mongoose.Schema({userId:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},materialId:{type:mongoose.Schema.Types.ObjectId,ref:"Material",required:true,unique:true},summary:{type:String,required:true}},{timestamps:true});
export default mongoose.model("Summary",schema);
