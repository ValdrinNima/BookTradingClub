const router = require("express").Router();
const usersController = require("../../controller/users");

router.get("/", usersController.users);


module.exports = router;
