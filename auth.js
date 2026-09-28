import jwt from "jsonwebtoken";
export function protect(req,res,next){try{const h=req.headers.authorization||"";if(!h.startsWith("Bearer "))return res.status(401).json({success:false,message:"Authentication token required"});req.user=jwt.verify(h.slice(7),process.env.JWT_SECRET);next();}catch{return res.status(401).json({success:false,message:"Invalid or expired token"});}}
export function adminOnly(req,res,next){if(req.user?.role!=="Admin")return res.status(403).json({success:false,message:"Administrator access required"});next();}
