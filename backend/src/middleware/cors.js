const cors = require("cors");

const whiteList = new Set(["http://localhost:3000", "http://localhost:5000"]);

const corsOptions = {
	optionsSuccessStatus: 200,
	origin: function (origin, callback) {
		if (whiteList.has(origin)) {
			callback(null, true);
		} else {
			callback(new Error("Not allowed by CORS"));
		}
	},
	credentials: true
};

module.exports = cors(corsOptions);
