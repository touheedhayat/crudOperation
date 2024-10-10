import { Router } from "express";
import {registerUser, getAllUsers,getUserById, updateUserId, deleteUser} from "../controllers/user.controller.js";

const router = Router();

router.route("/register").post(registerUser)
router.route("/allUsers").get(getAllUsers)
router.route("/findById/:id").get(getUserById)
router.route("/findByIdAndUpdate/:id").patch(updateUserId)
router.route("/findIdAndDelete/:id").delete(deleteUser)


export default router