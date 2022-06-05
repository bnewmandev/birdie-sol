import express from "express";
import pool from "../database";

export const visitController = express.Router();

visitController.get("/visits", async (req, res) => {
	if (!req.query.id) {
		return res.json({});
	}
	pool.query(
		"SELECT visit_id, unix_timestamp(timestamp) * 1000 AS timestamp from events where care_recipient_id = ? and event_type = 'visit_completed' order by visit_id, timestamp;",
		req.query.id,
		(err, result) => {
			if (err) return console.log(err);
			let visits: any = {};
			result.forEach((row: any) => {
				if (!(row["visit_id"] in visits)) {
					visits[row["visit_id"]] = row["timestamp"];
				}
			});
			res.json({ visits: visits });
		}
	);
});
