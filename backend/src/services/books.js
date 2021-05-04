const pool = require("../config/db");

const listBooks = async () => {
	const query =
		"SELECT book.book_id, title, author, isbn, comment FROM book LEFT JOIN offers ON book.book_id = offers.book_id";
	return await pool.query(query);
};

module.exports = {
	listBooks,
};
