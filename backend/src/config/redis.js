const redis = require("redis");

const redisClient = redis.createClient({
	port: process.env.REDIS_PORT || 6379,
	host: process.env.REDIS_HOST || "localhost",
});

module.exports = redisClient;
