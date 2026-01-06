import db from "../db/config.js"

export const getAllPosts = async (req,res)=>{
    const [rows] = await db.query("SELECT * FROM posts")
    res.status(200).json(rows)
}

export const getSinglePost = async (req, res) => {
    const { id } = req.params
    console.log(req.params)
    const [rows] = await db.query(
        "SELECT * FROM posts WHERE id = ?",
        [id]
    )

    if (rows.length === 0) {
        return res.status(404).json({ message: "Post not found" })
    }

    res.status(200).json(rows[0])
}

export const createUser = async (req, res) => {
    const {name,email,password} = req.body
    const [existing] = await db.query("SELECT * FROM users WHERE EMAIL = ? AND PASSWORD = ? ", [email,password])

    if (existing) {
        res.status(404).json({ message: "this username already exists"})
    }
    else {
        const [rows] = await db.query("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name,email,password])
        res.status(201).json({ message: "username added succesfuly "})
    }
}

export const login = async (req,res)=> {
    const {email,password} = req.body
    // logic for log in adn using JWT
}