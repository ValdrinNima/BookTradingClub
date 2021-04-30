const Pool = require("pg").Pool;

const pool = new Pool({
	user: process.env.DB_USER || "postgres",
	password: process.env.DB_PASSWORD || "postgres",
	host: process.env.DB_HOST || "localhost",
	database: process.env.DB_NAME || "booktrading",
	port: process.env.DB_PORT || 5432,
});

module.exports = pool;
