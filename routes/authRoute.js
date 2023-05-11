import express from "express";
import {
  registerController,
  loginController,
} from "../controllers/authController.js";

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST//register controller is function and we call that from controller file
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

export default router;
