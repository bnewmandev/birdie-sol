require("dotenv").config();
const fs = require("fs");
const { createPool } = require("mysql");

const pool = createPool({
	host: process.env.DB_HOST,
	database: process.env.DB_NAME,
	user: process.env.DB_USER,
	password: process.env.DB_PWORD,
	port: process.env.DB_PORT,
});

pool.getConnection(async (err, conn) => {
	if (err) throw err;
	conn.query("SELECT care_recipient_id FROM events;", (err, res) => {
		let allKeys = new Set();
		if (err) throw err;
		res.forEach((element, i) => {
			if (i % 100) console.log(i + "/" + res.length);
			allKeys.add(element["care_recipient_id"]);
		});
		fs.writeFile("allRecipients.json", JSON.stringify(Array.from(allKeys)), (err) => {
			if (err) throw err;
			console.log("Done!");
			conn.release();
		});
	});
});
