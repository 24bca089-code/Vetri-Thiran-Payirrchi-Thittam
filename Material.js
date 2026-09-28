import mongoose from "mongoose";
const schema=new mongoose.Schema({userId:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},title:{type:String,required:true},subject:String,content:{type:String,required:true},originalFileName:String},{timestamps:true});
export default mongoose.model("Material",schema);
