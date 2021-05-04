const { userAlreadyExists, addUser } = require("../services/auth");

const register = async (req, res) => {
	try {
		const { username, email, password } = req.body;
		const result = await userAlreadyExists(username, email);
		if (result.rows.length > 0) {
			res.json({ msg: "Username or Email is already in use" });
			return;
		}
		await addUser(username, email, password);
		res.status(201).json({ msg: "Successfully registered" });
	} catch (err) {
		console.log(err);
	}
};

module.exports = {
	register,
};
