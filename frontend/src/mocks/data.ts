import { addHours } from "../utils/dateUtils";

const data = {
	events: [
		{
			id: 0,
			title: "Mood Observation",
			allDay: false,
			start: new Date(),
			end: new Date(),
			color: "blue",
		},
		{
			id: 1,
			title: "Check in",
			allDay: false,
			start: addHours(new Date(), 3),
			end: addHours(new Date(), 3),
			color: "green",
		},
	],
	recipients: [
		"df50cac5-293c-490d-a06c-ee26796f850d",
		"e3e2bff8-d318-4760-beea-841a75f00227",
		"ad3512a6-91b1-4d7d-a005-6f8764dd0111",
	],
};

export default data;
