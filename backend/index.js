const express = require("express");
const cors = require("cors");
const pool = require("./db");
require("dotenv").config();

const app = express();

// middleware
app.use(cors);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




app.listen(process.env.PORT, () => {
	console.log("listening on port" + process.env.PORT);
});
