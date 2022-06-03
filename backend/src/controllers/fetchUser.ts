import express from "express";
import pool from "../database";

export const fetchUserController = express.Router();

const colorMap: { [key: string]: string } = {
	fluid_intake_observation: "blue",
	task_completed: "white",
	physical_health_observation: "green",
	visit_completed: "white",
	check_out: "white",
	mood_observation: "green",
	regular_medication_taken: "blue",
	alert_raised: "red",
	no_medication_observation_received: "blue",
	incontinence_pad_observation: "green",
	check_in: "white",
	general_observation: "green",
	regular_medication_not_taken: "blue",
	food_intake_observation: "blue",
	task_completion_reverted: "white",
	mental_health_observation: "green",
	medication_schedule_updated: "white",
	visit_cancelled: "white",
	regular_medication_maybe_taken: "blue",
	medication_schedule_created: "white",
	alert_qualified: "orange",
	task_schedule_created: "white",
	concern_raised: "orange",
	regular_medication_partially_taken: "blue",
	catheter_observation: "green",
	toilet_visit_recorded: "green",
};

interface Response {
	time: number;
	payload: string;
}

interface Payload {
	id: string;
	visit_id: string;
	timestamp: string;
	event_type?: string | undefined;
	caregiver_id: string;
	task_instance_id: string;
	care_recipient_id: string;
	[key: string]: string | undefined;
}

fetchUserController.get("/fetchUser", async (req, res) => {
	pool.query(
		"select payload, unix_timestamp(timestamp) * 1000 AS time from events where care_recipient_id = ? ORDER BY time desc;",
		req.query.id,
		(err, result) => {
			if (err) return console.log(err);
			const events = result.map((item: Response) => {
				const payload: Payload = JSON.parse(item.payload);
				let title: string = (payload.event_type || "None").replace(/_/g, " ");

				return {
					id: payload.id,
					title: title.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase()),
					allDay: false,
					start: item.time,
					end: item.time,
					color: colorMap[payload.event_type || "black"],
				};
			});
			res.json({
				events: events,
				lastEventDate: result[0].time,
			});
		}
	);
});
