const router = require("express").Router();
const profileController = require("../../controller/books");

router.get("/", profileController.books);

module.exports = router;
