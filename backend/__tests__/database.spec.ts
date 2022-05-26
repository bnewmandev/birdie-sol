import dotenv from "dotenv";
dotenv.config();

import pool from "../src/database";

describe("database single queries", () => {
	it("returns 10 when queries to 'SELECT 10;'", (done) => {
		pool.query("SELECT 10;", (err, res) => {
			if (err) return done(err);
			try {
				expect(res).toEqual([{ "10": 10 }]);
				done();
			} catch (err) {
				done(err);
			}
		});
	});

	it("returns the correct observation type given an observation ID", (done) => {
		pool.query("SELECT event_type FROM events WHERE id = '01f547a3-7eb1-48f0-86d2-ddc996abd617';", (err, res) => {
			if (err) return done(err);
			try {
				expect(res).toEqual([{ event_type: "mood_observation" }]);
				done();
			} catch (err) {
				done(err);
			}
		});
	});
});
