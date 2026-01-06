import express from "express"
import {getAllPosts,getSinglePost} from "../controller/post_controller.js"

const router = express.Router()

router.get("/posts", getAllPosts)

router.get("/posts/:id", getSinglePost)




export default router;