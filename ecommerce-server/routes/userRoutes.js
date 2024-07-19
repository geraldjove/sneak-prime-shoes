const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

router.post("/", userController.registerUser);
router.get("/", userController.getAllUsers);
router.post("/login", userController.loginUser);
router.post("/logout", userController.logoutUser);
router.get("/:id", userController.getUser);

module.exports = router;
