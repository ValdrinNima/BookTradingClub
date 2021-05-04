const router = require("express").Router();
const loginController = require("../../controller/login");

router.post("/", loginController.login);

module.exports = router;
