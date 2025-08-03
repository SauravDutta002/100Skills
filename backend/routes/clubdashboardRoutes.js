import express from "express"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import ClubAdmin from "../models/ClubAdmin.js"
import {getClubsEvents , editEvent , deleteEvent , getProfileData } from "../controllers/ClubsEventController.js"
import {auth} from "../middlewares/authMiddleware.js"

const router = express.Router();

router.get("/my", auth , getClubsEvents );
router.put("/edit/:id", auth , editEvent  );
router.delete("/delete/:id" , auth , deleteEvent);
router.get("/getProfileData" , auth ,getProfileData );




export default router; 