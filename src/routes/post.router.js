import { Router } from "express";
import {userInput, getUserPost, updatePost, deletePost} from "../controllers/post.controller.js"

const router = Router();
// createNewPost Route
router.route("/uploadPost").post(userInput)

// getPost Route
router.route("/getPost/:id").get(getUserPost)

// updatePost Route
router.route("/updatePost").patch(updatePost)

//deletePost Route
router.route("/deletePost").delete(deletePost)

export default router