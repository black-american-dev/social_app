import db from "../db/config.js"

export const getAllPosts = async (req,res)=>{
    const [rows] = await db.query("SELECT posts.id,posts.title,posts.content,posts.likes_count,users.name AS author FROM posts JOIN users ON posts.user_id = users.id ORDER BY posts.id asc")
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

export const createPost = async (req,res) => {
    const {title,content} = req.body
    const user_id = req.user.id
    if (!title) {
        return res.status(400).json({message: "the title should not be empty !"})
    }
    if (!content) {
        return res.status(400).json({message: "the content should not be empty !"})
    }
    const [rows] = await db.query("INSERT INTO posts (user_id,title,content) VALUES (?,?,?)",[user_id,title,content])
    res.status(201).json({message: "the post has been created successfuly "})
}