const express = require("express");
const router = express.Router();
const { savestudents } = require("../controller/student-controller");

router.post("/register", savestudents);

module.exports = router;
