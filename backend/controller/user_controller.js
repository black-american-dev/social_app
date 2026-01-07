import db from "../db/config.js"
import jwt from "jsonwebtoken"


export const createUser = async (req, res) => {
    const {name,email,password} = req.body
    const [existing] = await db.query("SELECT * FROM users WHERE EMAIL = ? AND PASSWORD = ? ", [email,password])

    if (existing.length > 0) {
        res.status(401).json({ message: "this username already exists"})
    }
    else {
        const [rows] = await db.query("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name,email,password])
        res.status(201).json({ message: "username created succesfuly "})
    }
}

export const login = async (req,res)=> {
    const {email,password} = req.body

    const [user] = db.query("SELECT * FROM users WHERE email = ? AND password = ?", [email,password])

    if (user.length === 0) {
        res.status(401).json({message: "error in the email or password !"})
    }
    else {
        const token = jwt.sign(
            {id:user.id,email:user.email,password:user.password},
            process.env.JWT_SECRET,
            {expiresIn: "1d"}
        )
        res.status(201).json({message: "user logged in successfuly", token})
    }
}