import db from "../db/config.js"

export const likedPost = async (req,res) => {
    const post_id = req.params.post_id 
    const user_id = req.user.id

    if (!post_id) {
        return res.status(401).json({message : "the post_id is invalid"})
    }
    if (!user_id) {
        return res.status(401).json({message : "the user id or token is invalid"})
    }
    try {
        const [exists] = db.query("SELECT id FROM post_likes WHERE post_id = ? and user_id = ?", [post_id,user_id])

        if (exists.length > 0) {
            await db.query("DELETE FROM post_likes WHERE id = ?",[exists.id])
            await db.query("UPDATE posts set likes = likes-1 WHERE id = ?", [post_id])
            res.status(201).json({message: "user removed like of the post successfuly"})
        } else {
            await db.query("INSERT INTO post_likes (post_id,user_id) VALUES (?,?)", [post_id,user_id])
            await db.query("UPDATE posts set likes = likes+1 WHERE id = ?", [post_id])
            res.status(201).json({message: "user liked the post successfuly"})
        }
    }catch (error) {
        res.status(500).json({message : "server error"})
    }
}