/**
 * @param { import('knex').Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// truncate all existing tables
	await knex.raw('TRUNCATE TABLE "user" CASCADE');
	await knex.raw('TRUNCATE TABLE "book" CASCADE');
	await knex.raw('TRUNCATE TABLE "request" CASCADE');
	await knex.raw('TRUNCATE TABLE "offer" CASCADE');

	await knex("user").insert([
		{
			id: 1,
			first_name: "Max",
			last_name: "Mustermann",
			password: "1234",
			username: "maxi",
			city: "Mainz",
			email: "max@mustermann.com",
		},
		{
			id: 2,
			first_name: "Dax",
			last_name: "Dustermann",
			password: "12345",
			username: "daxi",
			city: "Mainz",
			email: "dax@dustermann.com",
		},
		{
			id: 3,
			first_name: "Kax",
			last_name: "Kustermann",
			password: "123456",
			username: "kaxi",
			city: "Mainz",
			email: "kax@kustermann.com",
		},
	]);
	await knex("book").insert([
		{ id: 3, title: "Harry Potter", author: "JKR", isbn: 1234 },
		{ id: 4, title: "Larry Lotter", author: "RKJ", isbn: 1235 },
		{ id: 5, title: "Karry Kotter", author: "SK", isbn: 1236 },
	]);
	return;
};
