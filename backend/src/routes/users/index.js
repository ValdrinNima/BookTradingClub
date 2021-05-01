const router = require("express").Router();
const pool = require("../../config/db");

router.get("/", async (req, res) => {
	const users = await pool.query("SELECT * FROM users");
	res.status(200).json({ data: users });
	return;
});

module.exports = router