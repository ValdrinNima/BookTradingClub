const redis = require("redis");

const redisClient = redis.createClient({
	port: process.env.REDIS_PORT || 6379,
	host: process.env.REDIS_HOST || "redis",
});

module.exports = redisClient;
