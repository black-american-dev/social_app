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