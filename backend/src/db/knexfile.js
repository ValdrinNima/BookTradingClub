// Update with your config settings.
const { knexSnakeCaseMappers } = require("objection");
// converts firstName to first_name instead of writing
// firstName : first_name

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
	development: {
		client: "postgresql",
		connection: {
			database: "objection_test",
			user: "vali",
			password: "postgres",
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: "knex_migrations",
		},
		seeds: {
			directory: "./seeds",
		},
		...knexSnakeCaseMappers,
	},
};
