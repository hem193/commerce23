import express from "express";

const router = express.Router();
//contollers
import { users } from "../controllers/auth.js";

router.get("/users", users);

export default router;
