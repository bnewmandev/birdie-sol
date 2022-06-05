import dotenv from "dotenv";
dotenv.config();

import pool from "../src/database";

import { parseType } from "../src/types/parseType";

it("Checkes that 20 random entries in the db are correctly identified", (done) => {
	pool.query("select * from events order by rand() limit 20;", (err, res) => {
		if (err) return done(err);
		try {
			res.forEach((entry: any) => {
				expect(() => {
					parseType(entry);
				}).not.toThrowError();
			});
			done();
		} catch (err) {
			done(err);
		}
	});
});
