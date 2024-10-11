import { Router } from "express";
import {registerUser,loginUser, getAllUsers,getUserById, updateUserId, deleteUser, getUserFromTocken} from "../controllers/user.controller.js";
import { authenticated } from "../controllers/middleware/auth.middleware.js";
const router = Router();

router.route("/login").post(loginUser)
router.route("/getUserFromToken").get(authenticated, getUserFromTocken)
router.route("/register").post(registerUser)
router.route("/allUsers").get(getAllUsers)
router.route("/findById/:id").get(getUserById)
router.route("/findByIdAndUpdate/:id").patch(updateUserId)
router.route("/findIdAndDelete/:id" ).delete(deleteUser)


export default router