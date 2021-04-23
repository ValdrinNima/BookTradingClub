const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const pool = require("./db");
const bcrypt = require("bcrypt");

passport.use(
	new LocalStrategy(function (username, password, cb) {
		pool.query(
			"SELECT user_id, username, password from users where username=$1",
			[username],
			(err, result) => {
				if (err) {
					return cb(err);
				}
				if (result.rows.length > 0) {
					const user = result.rows[0];
					bcrypt.compare(password, user.password, (err, res) => {
						if (res) {
							cb(null, user);
						} else {
							cb(null, false);
						}
					});
				} else {
					cb(null, false);
				}
			}
		);
	})
);

passport.serializeUser(function (user, done) {
	console.log("serialize user is executing");
	done(null, user.user_id);
});

passport.deserializeUser(function (id, done) {
	pool.query(
		"SELECT * FROM users WHERE id = $1",
		[parseInt(id, 10)],
		(err, results) => {
			if (err) {
				return done(err);
			}
			let user = results.rows[0];
			done(null, user);
		}
	);
});
