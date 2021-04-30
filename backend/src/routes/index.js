const express = require("express");
const router = express.Router();
const profileController = require("../controller/books");
const pool = require("../config/db");
const bcrypt = require("bcrypt");
const passport = require("passport");

router.get("/", (req, res) => {
	if (req.session.count) {
		req.session.count += 1;
	} else {
		req.session.count = 1;
	}
	res.json({ msg: "hi" });
});

router.post("/login", (req, res, next) => {
	passport.authenticate("local", (err, user, info) => {
		if (err) throw err;
		if (!user) res.json({ msg: "No user found", loggedIn: false });
		else {
			req.logIn(user, (err) => {
				if (err) throw err;
				res.json({ msg: "Succesfully Authenticated", loggedIn: true });
			});
		}
	})(req, res, next);
});

router.post("/register", async (req, res) => {
	try {
		const { username, email, password } = req.body;
		const hashedPassword = await bcrypt.hash(password, 10);

		const result = await pool.query(
			"SELECT * FROM users WHERE username=$1 OR email=$2",
			[username, email]
		);
		if (result.rows.length > 0) {
			res.json({ msg: "Username or Email is already in use" });
			return;
		}

		await pool.query(
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
