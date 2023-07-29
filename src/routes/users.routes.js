const {Router} = require("express");

const userRoutes = Router();

userRoutes.post("/", UserController.create)

const UserController = require("../controllers/UserController")