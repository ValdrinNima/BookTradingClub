const express = require("express");
const cors = require("cors");
const pool = require("./db");
require("dotenv").config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
	try {
		const bla = await pool.query("SELECT * FROM users");
		res.json(bla.rows);
	} catch (err) {}
});

app.listen(process.env.PORT, () => {
	console.log("listening on port " + process.env.PORT);
});
