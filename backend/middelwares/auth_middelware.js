import jwt from "jsonwebtoken"

export const authMiddelware = (req,res,next) => {
    const authHeader = req.headers.authorization
    if (!authHeader) {
        return res.status(401).json({message: "you need to be logged in!"})
    }
    const token = authHeader.split(" ")[1]
    try {
        const payload = jwt.verify(token ,process.env.JWT_SECRET)

        req.user = {
            id : payload.id
        }
        next()
    }
    catch(error) {
        return res.status(401).json({message : "invalid token"})
    }
}