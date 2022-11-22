const { Router } = require("express");
const { userLogin } = require("../controllers/auth.controllers");
const router = Router();

router.post("/", userLogin);

module.exports = router;
