import express from "express";
import pool from "../database";

export const validateUserController = express.Router();

validateUserController.get("/validateUser", async (req, res) => {
	pool.query("select COUNT(1) from events where care_recipient_id = ?", req.query.id, (err, result) => {
		if (err) return console.log(err);
		if (result[0]["COUNT(1)"] > 0) {
			res.json({ code: 200, recipientId: req.query.id });
		} else {
			res.json({ code: 404, recipientId: req.query.id });
		}
	});
});
