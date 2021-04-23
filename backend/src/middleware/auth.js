const { restore } = require("../config/redis");

const isAuth = (req, res, next) => {
	if (req.isAuthenticated()) {
		next();
	} else {
		res.status(401).json({ msg: "not authorized" });
	}
};

module.exports = {
	isAuth,
};
