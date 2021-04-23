const pool = require("../config/db");

const books = async (req, res) => {
	try {
		const query =
			"SELECT book.book_id, title, author, isbn, comment FROM book LEFT JOIN offers ON book.book_id = offers.book_id";
		const bla = await pool.query(query);
		res.json(bla.rows);
	} catch (err) {
		console.error(err);
	}
};

module.exports = {
	books,
};
