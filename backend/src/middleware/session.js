const session = require("express-session");
const connectRedis = require("connect-redis");
const redisClient = require("../config/redis");
require("dotenv").config();

const RedisStore = connectRedis(session);

module.exports = session({
	store: new RedisStore({ client: redisClient }),
	secret: process.env.SESSION_SECRET || "secret",
	saveUninitialized: false,
	resave: false,
	cookie: {
		secure: process.env.NODE_ENV == "production", // only send the cookie back if you are running on a httpS connection, but in developement we are using localhost therefore we set it false but in production you should set it to true
		httpOnly: true,
		maxAge: 1000 * 60 * 60 * 24, // one day
	},
});
