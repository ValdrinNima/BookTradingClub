const pool = require("../config/db");

const listUsers = async () => {
	return await pool.query("SELECT * FROM users");
};

module.exports = {
	listUsers,
};
