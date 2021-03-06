const express = require("express");
const cors = require("cors");
require("dotenv").config();
const router = require("./routes");
const session = require("./middleware/session");
const corsMiddleware = require("./middleware/cors");
const passport = require("passport");
const pool = require("./config/db");

const app = express();

app.options("*", corsMiddleware);
app.use(corsMiddleware);
// app.use(cors({ origin: "*" }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session);

require("./config/passport");

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/v1/", router);

app.listen(process.env.PORT, () => {
	console.log("listening on port " + process.env.PORT);
});
