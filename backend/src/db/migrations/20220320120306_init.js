/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.schema
		.createTable("user", (table) => {
			table.increments();
			table.string("first_name");
			table.string("last_name");
			table.string("username").notNullable();
			table.string("password").notNullable();
			table.string("email").notNullable().unique();
			table.string("city");
			table.timestamps(true, true);
		})
		.createTable("book", (table) => {
			table.increments();
			table.string("title").notNullable();
			table.string("author").notNullable();
			table.integer("isbn").notNullable().unique();
			table.timestamps(true, true);
		})
		.createTable("request", (table) => {
			table.integer("user_id").references("id").inTable("user");
			table.integer("book_id").references("id").inTable("book");
			table.timestamps(true, true);
		})
		.createTable("offer", (table) => {
			table.integer("user_id").references("id").inTable("user");
			table.integer("book_id").references("id").inTable("book");
			table.timestamps(true, true);
			table.text("comment");
		});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema
		.dropTableIfExists("user")
		.dropTableIfExists("book")
		.dropTableIfExists("request")
		.dropTableIfExists("offer");
};
