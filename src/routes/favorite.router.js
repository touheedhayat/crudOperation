import { Router } from "express";
import {createFavPost, deleteFavPost,getAllFavUsersById} from "../controllers/favorite.controller.js" 


const router = Router()

router.route("/favoritePost").post(createFavPost)
router.route("/unfavPost/:id").delete(deleteFavPost)
router.route ("/allFavPost/:id").get(getAllFavUsersById)

export default router