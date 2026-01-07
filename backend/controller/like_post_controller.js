import db from "../db/config.js"

export const likedPost = async (req, res) => {
  const post_id = req.params.id
  const user_id = req.user.id

  if (!post_id) {
    return res.status(400).json({ message: "invalid post id" })
  }

  if (!user_id) {
    return res.status(401).json({ message: "unauthorized" })
  }

  try {
    // 1️⃣ Check if already liked
    const [exists] = await db.query(
      "SELECT id FROM post_likes WHERE post_id = ? AND user_id = ?",
      [post_id, user_id]
    )

    if (exists.length > 0) {
      // UNLIKE
      await db.query(
        "DELETE FROM post_likes WHERE id = ?",
        [exists[0].id]
      )

      await db.query(
        "UPDATE posts SET likes_count = likes_count - 1 WHERE id = ?",
        [post_id]
      )

      return res.status(200).json({
        message: "user removed like from the post"
      })
    } else {
      // LIKE
      await db.query(
        "INSERT INTO post_likes (post_id, user_id) VALUES (?, ?)",
        [post_id, user_id]
      )

      await db.query(
        "UPDATE posts SET likes_count = likes_count + 1 WHERE id = ?",
        [post_id]
      )

      return res.status(201).json({
        message: "user liked the post"
      })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "server error" })
  }
}
