import User from "../models/User.js"; import Material from "../models/Material.js";
export async function dashboard(req,res,next){try{res.json({success:true,statistics:{users:await User.countDocuments(),materials:await Material.countDocuments()}})}catch(e){next(e)}}
export async function listUsers(req,res,next){try{res.json({success:true,users:await User.find().select("-password").sort({createdAt:-1})})}catch(e){next(e)}}
