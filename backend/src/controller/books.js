const { listBooks } = require("../services/books");

const books = async (req, res) => {
	try {
		const books = await listBooks();
		res.json(books.rows);
	} catch (err) {
		console.error(err);
	}
};

module.exports = {
	books,
};
