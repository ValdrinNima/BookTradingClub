const router = require("express").Router();
const passport = require("passport");

router.post("/", (req, res, next) => {
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

module.exports = router;
