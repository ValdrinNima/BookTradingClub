const usersService = require("../services/users");

const users = async (req, res) => {
	// const users = await usersService.listUsers();
	const users = "hello world!!!!!";
	res.status(200).json({ data: users });
	return;
};

module.exports = {
	users,
};
