import BlogsController from "../controller/blog.js";
import UsersController from "../controller/user.js";
import { auth } from "../middleware/auth.js";
import express from "express";

const router = express.Router();

router.get("/api/blogs", BlogsController.get);
router.post("/api/blogs", BlogsController.create);
router.get("/users", auth, UsersController.get);
router.post("/users/sign-up", UsersController.create);
router.post("/users/sign-in", UsersController.register);
router.delete("/users/:id", auth, UsersController.delete);
router.put("/users/:id", UsersController.update);

export default router;
