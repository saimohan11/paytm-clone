import jwt from 'jsonwebtoken'
import JWT_SECRET from '../config/secret.js'

 export const authMiddleWare = (req,res,next)=>{
    const authHeader = req.header.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({
            error: "No Auth header found"
        })
    }
    const token = authHeader.split(" ")[1]
    const decoded = jwt.verify(token,JWT_SECRET);
    if(decoded.userId) {
        req.userId = decoded.userId;
        console.log(req.userId)
        next()
    } else {
        return res.status(403).json({
            error: "Invalid token"
        })
    }
}