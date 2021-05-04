const passport = require("passport");
const pool = require("../config/db");
const bcrypt = require("bcrypt");

const authenticate = (req, res, next) => {
	return passport.authenticate("local", (err, user, info) => {
		if (err) throw err;
		if (!user) res.json({ msg: "No user found", loggedIn: false });
		else {
			req.logIn(user, (err) => {
				if (err) throw err;
				res.json({ msg: "Succesfully Authenticated", loggedIn: true });
			});
		}
	})(req, res, next);
};

const userAlreadyExists = async (username, email) => {
	const result = await pool.query(
		"SELECT * FROM users WHERE username=$1 OR email=$2",
		[username, email]
	);
	return result;
};

const addUser = async (username, email, password) => {
	const hashedPassword = await bcrypt.hash(password, 10);
	return await pool.query(
		"INSERT INTO users (username, email, password) VALUES ($1, $2, $3)",
		[username, email, hashedPassword]
	);
};

module.exports = {
	userAlreadyExists,
	addUser,
	authenticate,
};
