import mongoose from "mongoose";
const schema=new mongoose.Schema({userId:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},studyPlan:{type:String,required:true},examDate:Date},{timestamps:true});
export default mongoose.model("StudyPlan",schema);
