const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

router.route("/random").get(userController.getRandomUser);

router.route("/all").get(userController.getAllUsers);

router.route("/save").post(userController.saveNewUser);

router.route("/update/:id").patch(userController.updateUser);

router.route("/bulk-update").patch(userController.bulkUpdateUsers);

router.route("/delete/:id").delete(userController.deleteUser);

module.exports = router;
