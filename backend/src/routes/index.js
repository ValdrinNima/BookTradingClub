const express = require("express");
const router = express.Router();

const usersRouter = require("./users");
const booksRouter = require("./books");
const loginRouter = require("./login");
const registerRouter = require("./register");

router.use("/users", usersRouter);
router.use("/books", booksRouter);
router.use("/login", loginRouter);
router.use("/register", registerRouter);

router.get("/test", (req, res) => {
	res.json({ msg: "Es klappt" });
});

module.exports = router;
