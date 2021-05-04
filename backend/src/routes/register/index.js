const router = require("express").Router();
const registerController = require("../../controller/register");

router.post("/", registerController.register);

module.exports = router;
