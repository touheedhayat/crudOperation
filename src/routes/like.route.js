import { Router } from "express"
import {likeAndDislike} from "../controllers/like.controller.js"

const router = Router()

router.route("/likePost").post(likeAndDislike)

export default router