const router = require("express").Router();
const pool = require("../../config/db");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
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

module.exports = router