import express from "express"
import {getAllPosts,getSinglePost,createPost} from "../controller/post_controller.js"
import {createUser, login} from "../controller/user_controller.js"
import {authMiddelware} from "../middelwares/auth_middelware.js"
import { likedPost } from "../controller/like_post_controller.js"
const router = express.Router()

// this is the posts routes :
router.get("/posts", getAllPosts)
router.get("/posts/:id", getSinglePost)
router.post("/posts/createPost",authMiddelware , createPost)

// this is the users routes :
router.post("/users/login", login)
router.post("/users/signin", createUser)

router.post("/like/post/:id", authMiddelware, likedPost)



export default router;