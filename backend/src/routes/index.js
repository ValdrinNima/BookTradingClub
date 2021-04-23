const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/authenticate");
const authController = require("../controller/auth");
const profileController = require("../controller/books");
const pool = require("../config/db");

router.post("/login", authController.login);

// all routes after this middlware are protected

router.get("/", (req, res) => {
	if (req.session.count) {
		req.session.count += 1;
	} else {
		req.session.count = 1;
	}
});

router.post("/login", passport.authenticate("local", (err, user, info) => {
	if (err) throw err
	if (!user) res.json({msg: "No user found"})
	else {
		req.logIn(user, err => {
			if (err) throw err
			res.json({msg: "Succesfully Authenticated"})
		})
	}
}) (req, res) => {
});

router.post("/register", async (req, res) => {
	try {
		const { username, email, password } = req.body;
		const hashedPassword = await bcrypt.hash(password, 10);

		pool.query(
			"INSERT INTO users (username, email, password) VALUES ($1, $2, $3)",
			[username, email, hashedPassword]
		);
		res.json({ msg: "Successfully registered" });
	} catch (err) {
		console.log(err);
	}
});

router.get("/books", profileController.books);

module.exports = router;
