const Pool = require("pg").Pool;

const pool = new Pool({
	user: "postgres",
	password: "password",
	host: "localhost",
	database: "booktrading",
	port: 5432,
});
