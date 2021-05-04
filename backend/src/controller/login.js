const { authenticate } = require("../services/auth");

const login = async (req, res, next) => {
	authenticate(req, res, next);
};

module.exports = {
	login,
};
