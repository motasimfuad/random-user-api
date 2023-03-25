const express = require("express");
const router = express.Router();

router.route("/random").get();

router.route("/all").get();

router.route("/save").post();

router.route("/update").patch();

router.route("/bulk-update").patch();

router.route("/delete").delete();

module.exports = router;
