const router = require("express").Router();
const booksController = require("../../controller/books");

router.get("/", booksController.books);

module.exports = router;
