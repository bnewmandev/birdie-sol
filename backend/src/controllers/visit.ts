import express from "express";
import pool from "../database";

export const visitController = express.Router();

visitController.get("/visits", async (req, res) => {
	if (!req.query.id) {
		res.json({});
	} else {
		pool.query(
			"SELECT visit_id, caregiver_id, unix_timestamp(timestamp) * 1000 AS time from events where care_recipient_id = ? and event_type = 'check_in' order by time, visit_id LIMIT 200;",
			req.query.id,
			(err, result) => {
				if (err) return console.log(err);
				let visits: any = {};
				result.forEach((row: any) => {
					if (!(row["visit_id"] in visits)) {
						visits[row["visit_id"]] = [row["time"], row["caregiver_id"]];
					}
				});
				res.json({ visits: visits });
			}
		);
	}
});

visitController.get("/visit", async (req, res) => {
	if (!req.query.id) {
		res.json({});
	} else {
		pool.query(
			"SELECT * from events where visit_id = ? ORDER BY timestamp LIMIT 100;",
			req.query.id,
			(err, result) => {
				if (err) return console.log(err);
				const events: any = [];
				result.forEach((row: any) => {
					let data = { ...row, payload: JSON.parse(row.payload) };
					if (data.payload.hasOwnProperty("navigation")) {
						delete data.payload.navigation;
					}

					if (data.payload.hasOwnProperty("screenProps")) {
						delete data.payload.screenProps;
					}

					if (data.payload.hasOwnProperty("observations")) {
						delete data.payload.observations;
					}

					events.push(data);
				});
				res.json({ events });
			}
		);
	}
});
