import { addHours } from "../utils/dateUtils";

const data = {
	events: [
		{
			id: "0",
			title: "Mood Observation",
			allDay: false,
			start: new Date(),
			end: new Date(),
			color: "blue",
		},
		{
			id: "1",
			title: "Check in",
			allDay: false,
			start: addHours(new Date(), 3),
			end: addHours(new Date(), 3),
			color: "green",
		},
		{
			id: "2",
			title: "Visit Completed",
			allDay: false,
			start: addHours(new Date(), 4),
			end: addHours(new Date(), 4),
			color: "orange",
		},
		{
			id: "3",
			title: "Concern Raised",
			allDay: false,
			start: addHours(new Date(), 48),
			end: addHours(new Date(), 48),
			color: "red",
		},
	],
	recipients: [
		"df50cac5-293c-490d-a06c-ee26796f850d",
		"e3e2bff8-d318-4760-beea-841a75f00227",
		"ad3512a6-91b1-4d7d-a005-6f8764dd0111",
	],
	visits: {
		"5cbe4770-8b66-f8a8-4878-b1e35339e141": [1556001039328, "868ffde9-b069-4af5-8835-c4ac4e72e4b5"],
		"5cbe4770-8b66-f8a8-45e5-02d181abe13e": [1556017646569, "8b7d80d7-f01f-4f4c-921e-d4d6ebf9c13c"],
	},

	eventData: [
		{
			payload:
				'{"id": "50b0aae8-41a7-4a97-a0e9-1a37e37d547f", "visit_id": "5cbe4770-8b66-f8a8-4878-b1e35339e141", "timestamp": "2019-04-23T06:30:39.328Z", "event_type": "check_in", "caregiver_id": "868ffde9-b069-4af5-8835-c4ac4e72e4b5", "care_recipient_id": "df50cac5-293c-490d-a06c-ee26796f850d"}',
			alert_id: null,
			task_instance_id: null,
			visit_id: "5cbe4770-8b66-f8a8-4878-b1e35339e141",
			caregiver_id: "868ffde9-b069-4af5-8835-c4ac4e72e4b5",
			payload_as_text:
				'{"id": "50b0aae8-41a7-4a97-a0e9-1a37e37d547f", "visit_id": "5cbe4770-8b66-f8a8-4878-b1e35339e141", "timestamp": "2019-04-23T06:30:39.328Z", "event_type": "check_in", "caregiver_id": "868ffde9-b069-4af5-8835-c4ac4e72e4b5", "care_recipient_id": "df50cac5-293c-490d-a06c-ee26796f850d"}',
			rejected_event_id: null,
			observation_event_id: null,
			timestamp: "2019-04-23T06:30:39.328Z",
			id: "50b0aae8-41a7-4a97-a0e9-1a37e37d547f",
			event_type: "check_in",
			care_recipient_id: "df50cac5-293c-490d-a06c-ee26796f850d",
		},
		{
			payload:
				'{"id": "3c39c46a-1424-459f-b302-10d21a293240", "visit_id": "5cbe4770-8b66-f8a8-4878-b1e35339e141", "timestamp": "2019-04-23T06:31:15.753Z", "event_type": "task_completion_reverted", "caregiver_id": "868ffde9-b069-4af5-8835-c4ac4e72e4b5", "task_instance_id": "dHw2ZjE5N2M3OC01Nzc3LTQ5MTktYTA4ZC00M2JiNGU3ZWRjYWZ8MjAxOS0wNC0yM1QxMTowMDowMC4wMDBafExVTkNI", "task_schedule_id": "6f197c78-5777-4919-a08d-43bb4e7edcaf", "care_recipient_id": "df50cac5-293c-490d-a06c-ee26796f850d", "task_definition_id": "36b50127-9f15-48af-8d89-5a96fa0fbcca", "task_schedule_note": "Please make me my meals. I have cereal, toast, yogurt and fruit for breakfast. Lunch I have half a sandwich, fruit, biscuits and a sweet.Tea, I have a hot meal, biscuits and a sweet.All meals I have a cup of tea and fresh juice/water", "task_definition_description": "Assist to prepare a meal with drinks"}',
			alert_id: null,
			task_instance_id:
				"dHw2ZjE5N2M3OC01Nzc3LTQ5MTktYTA4ZC00M2JiNGU3ZWRjYWZ8MjAxOS0wNC0yM1QxMTowMDowMC4wMDBafExVTkNI",
			visit_id: "5cbe4770-8b66-f8a8-4878-b1e35339e141",
			caregiver_id: "868ffde9-b069-4af5-8835-c4ac4e72e4b5",
			payload_as_text:
				'{"id": "3c39c46a-1424-459f-b302-10d21a293240", "visit_id": "5cbe4770-8b66-f8a8-4878-b1e35339e141", "timestamp": "2019-04-23T06:31:15.753Z", "event_type": "task_completion_reverted", "caregiver_id": "868ffde9-b069-4af5-8835-c4ac4e72e4b5", "task_instance_id": "dHw2ZjE5N2M3OC01Nzc3LTQ5MTktYTA4ZC00M2JiNGU3ZWRjYWZ8MjAxOS0wNC0yM1QxMTowMDowMC4wMDBafExVTkNI", "task_schedule_id": "6f197c78-5777-4919-a08d-43bb4e7edcaf", "care_recipient_id": "df50cac5-293c-490d-a06c-ee26796f850d", "task_definition_id": "36b50127-9f15-48af-8d89-5a96fa0fbcca", "task_schedule_note": "Please make me my meals. I have cereal, toast, yogurt and fruit for breakfast. Lunch I have half a sandwich, fruit, biscuits and a sweet.Tea, I have a hot meal, biscuits and a sweet.All meals I have a cup of tea and fresh juice/water", "task_definition_description": "Assist to prepare a meal with drinks"}',
			rejected_event_id: null,
			observation_event_id: null,
			timestamp: "2019-04-23T06:31:15.753Z",
			id: "3c39c46a-1424-459f-b302-10d21a293240",
			event_type: "task_completion_reverted",
			care_recipient_id: "df50cac5-293c-490d-a06c-ee26796f850d",
		},
		{
			payload:
				'{"id": "cecebbf5-5d64-41a9-83a0-c55de9233ec4", "visit_id": "5cbe4770-8b66-f8a8-4878-b1e35339e141", "timestamp": "2019-04-23T06:31:15.753Z", "event_type": "task_completion_reverted", "caregiver_id": "868ffde9-b069-4af5-8835-c4ac4e72e4b5", "task_instance_id": "dHw2YzBjZGViMy1mNzhlLTQwNTUtYmRlMy1kMmVmYTdlMmFmNjZ8MjAxOS0wNC0yM1QxMTowMDowMC4wMDBafExVTkNI", "task_schedule_id": "6c0cdeb3-f78e-4055-bde3-d2efa7e2af66", "care_recipient_id": "df50cac5-293c-490d-a06c-ee26796f850d", "task_definition_id": "f71f00c2-ed7e-4366-a2be-d2abc6eb939b", "task_schedule_note": "Please change my pad and give me a freshen up", "task_definition_description": "Assist to change incontinence pants"}',
			alert_id: null,
			task_instance_id:
				"dHw2YzBjZGViMy1mNzhlLTQwNTUtYmRlMy1kMmVmYTdlMmFmNjZ8MjAxOS0wNC0yM1QxMTowMDowMC4wMDBafExVTkNI",
			visit_id: "5cbe4770-8b66-f8a8-4878-b1e35339e141",
			caregiver_id: "868ffde9-b069-4af5-8835-c4ac4e72e4b5",
			payload_as_text:
				'{"id": "cecebbf5-5d64-41a9-83a0-c55de9233ec4", "visit_id": "5cbe4770-8b66-f8a8-4878-b1e35339e141", "timestamp": "2019-04-23T06:31:15.753Z", "event_type": "task_completion_reverted", "caregiver_id": "868ffde9-b069-4af5-8835-c4ac4e72e4b5", "task_instance_id": "dHw2YzBjZGViMy1mNzhlLTQwNTUtYmRlMy1kMmVmYTdlMmFmNjZ8MjAxOS0wNC0yM1QxMTowMDowMC4wMDBafExVTkNI", "task_schedule_id": "6c0cdeb3-f78e-4055-bde3-d2efa7e2af66", "care_recipient_id": "df50cac5-293c-490d-a06c-ee26796f850d", "task_definition_id": "f71f00c2-ed7e-4366-a2be-d2abc6eb939b", "task_schedule_note": "Please change my pad and give me a freshen up", "task_definition_description": "Assist to change incontinence pants"}',
			rejected_event_id: null,
			observation_event_id: null,
			timestamp: "2019-04-23T06:31:15.753Z",
			id: "cecebbf5-5d64-41a9-83a0-c55de9233ec4",
			event_type: "task_completion_reverted",
			care_recipient_id: "df50cac5-293c-490d-a06c-ee26796f850d",
		},
		{
			payload:
				'{"id": "de628207-ca1c-485e-afd1-95e8adce1be7", "visit_id": "5cbe4770-8b66-f8a8-4878-b1e35339e141", "timestamp": "2019-04-23T06:31:15.753Z", "event_type": "task_completion_reverted", "caregiver_id": "868ffde9-b069-4af5-8835-c4ac4e72e4b5", "task_instance_id": "dHw1MDAzY2Q5Ni03N2FhLTQ1OWEtOWJiNi1kYjM0YWM2OGU0OTV8MjAxOS0wNC0yM1QxMTowMDowMC4wMDBafExVTkNI", "task_schedule_id": "5003cd96-77aa-459a-9bb6-db34ac68e495", "care_recipient_id": "df50cac5-293c-490d-a06c-ee26796f850d", "task_definition_id": "4c5323f2-65b2-4453-8437-f8193b75702c", "task_schedule_note": "Please follow the MAR chart.", "task_definition_description": "Assist to administer medication"}',
			alert_id: null,
			task_instance_id:
				"dHw1MDAzY2Q5Ni03N2FhLTQ1OWEtOWJiNi1kYjM0YWM2OGU0OTV8MjAxOS0wNC0yM1QxMTowMDowMC4wMDBafExVTkNI",
			visit_id: "5cbe4770-8b66-f8a8-4878-b1e35339e141",
			caregiver_id: "868ffde9-b069-4af5-8835-c4ac4e72e4b5",
			payload_as_text:
				'{"id": "de628207-ca1c-485e-afd1-95e8adce1be7", "visit_id": "5cbe4770-8b66-f8a8-4878-b1e35339e141", "timestamp": "2019-04-23T06:31:15.753Z", "event_type": "task_completion_reverted", "caregiver_id": "868ffde9-b069-4af5-8835-c4ac4e72e4b5", "task_instance_id": "dHw1MDAzY2Q5Ni03N2FhLTQ1OWEtOWJiNi1kYjM0YWM2OGU0OTV8MjAxOS0wNC0yM1QxMTowMDowMC4wMDBafExVTkNI", "task_schedule_id": "5003cd96-77aa-459a-9bb6-db34ac68e495", "care_recipient_id": "df50cac5-293c-490d-a06c-ee26796f850d", "task_definition_id": "4c5323f2-65b2-4453-8437-f8193b75702c", "task_schedule_note": "Please follow the MAR chart.", "task_definition_description": "Assist to administer medication"}',
			rejected_event_id: null,
			observation_event_id: null,
			timestamp: "2019-04-23T06:31:15.753Z",
			id: "de628207-ca1c-485e-afd1-95e8adce1be7",
			event_type: "task_completion_reverted",
			care_recipient_id: "df50cac5-293c-490d-a06c-ee26796f850d",
		},
		{
			payload:
				'{"id": "525bea93-e728-4bff-8c27-0ac167931a34", "visit_id": "5cbe4770-8b66-f8a8-4878-b1e35339e141", "timestamp": "2019-04-23T06:31:17.322Z", "event_type": "check_in", "caregiver_id": "8b7d80d7-f01f-4f4c-921e-d4d6ebf9c13c", "care_recipient_id": "df50cac5-293c-490d-a06c-ee26796f850d"}',
			alert_id: null,
			task_instance_id: null,
			visit_id: "5cbe4770-8b66-f8a8-4878-b1e35339e141",
			caregiver_id: "8b7d80d7-f01f-4f4c-921e-d4d6ebf9c13c",
			payload_as_text:
				'{"id": "525bea93-e728-4bff-8c27-0ac167931a34", "visit_id": "5cbe4770-8b66-f8a8-4878-b1e35339e141", "timestamp": "2019-04-23T06:31:17.322Z", "event_type": "check_in", "caregiver_id": "8b7d80d7-f01f-4f4c-921e-d4d6ebf9c13c", "care_recipient_id": "df50cac5-293c-490d-a06c-ee26796f850d"}',
			rejected_event_id: null,
			observation_event_id: null,
			timestamp: "2019-04-23T06:31:17.322Z",
			id: "525bea93-e728-4bff-8c27-0ac167931a34",
			event_type: "check_in",
			care_recipient_id: "df50cac5-293c-490d-a06c-ee26796f850d",
		},
		{
			payload:
				'{"id": "25e2ef82-8b2c-4206-9b86-1a913048d540", "visit_id": "5cbe4770-8b66-f8a8-4878-b1e35339e141", "timestamp": "2019-04-23T06:31:27.405Z", "event_type": "task_completion_reverted", "caregiver_id": "868ffde9-b069-4af5-8835-c4ac4e72e4b5", "task_instance_id": "dHwyMjAwNGY1ZS1jOTdiLTRhYmItYTI5YS02MjhjYTlmMzlkNDF8MjAxOS0wNC0yM1QwNzowMDowMC4wMDBafE1PUk5JTkc=", "task_schedule_id": "22004f5e-c97b-4abb-a29a-628ca9f39d41", "care_recipient_id": "df50cac5-293c-490d-a06c-ee26796f850d", "task_definition_id": "3e85cff0-7f12-4d37-bf83-68f715db74b7", "task_schedule_note": "Please hoist me to my arm chair and make me comfortable. Please put my blankets and pillows in place how I would like them", "task_definition_description": "Assist out of bed with stand or hoist"}',
			alert_id: null,
			task_instance_id:
				"dHwyMjAwNGY1ZS1jOTdiLTRhYmItYTI5YS02MjhjYTlmMzlkNDF8MjAxOS0wNC0yM1QwNzowMDowMC4wMDBafE1PUk5JTkc=",
			visit_id: "5cbe4770-8b66-f8a8-4878-b1e35339e141",
			caregiver_id: "868ffde9-b069-4af5-8835-c4ac4e72e4b5",
			payload_as_text:
				'{"id": "25e2ef82-8b2c-4206-9b86-1a913048d540", "visit_id": "5cbe4770-8b66-f8a8-4878-b1e35339e141", "timestamp": "2019-04-23T06:31:27.405Z", "event_type": "task_completion_reverted", "caregiver_id": "868ffde9-b069-4af5-8835-c4ac4e72e4b5", "task_instance_id": "dHwyMjAwNGY1ZS1jOTdiLTRhYmItYTI5YS02MjhjYTlmMzlkNDF8MjAxOS0wNC0yM1QwNzowMDowMC4wMDBafE1PUk5JTkc=", "task_schedule_id": "22004f5e-c97b-4abb-a29a-628ca9f39d41", "care_recipient_id": "df50cac5-293c-490d-a06c-ee26796f850d", "task_definition_id": "3e85cff0-7f12-4d37-bf83-68f715db74b7", "task_schedule_note": "Please hoist me to my arm chair and make me comfortable. Please put my blankets and pillows in place how I would like them", "task_definition_description": "Assist out of bed with stand or hoist"}',
			rejected_event_id: null,
			observation_event_id: null,
			timestamp: "2019-04-23T06:31:27.405Z",
			id: "25e2ef82-8b2c-4206-9b86-1a913048d540",
			event_type: "task_completion_reverted",
			care_recipient_id: "df50cac5-293c-490d-a06c-ee26796f850d",
		},
		{
			payload:
				'{"id": "412f3249-239b-4dcd-9480-d9a595ca614a", "visit_id": "5cbe4770-8b66-f8a8-4878-b1e35339e141", "timestamp": "2019-04-23T06:31:27.405Z", "event_type": "task_completion_reverted", "caregiver_id": "868ffde9-b069-4af5-8835-c4ac4e72e4b5", "task_instance_id": "dHxlYjQyMWUyNi1jZWU2LTRmMTAtYTc5ZS03ZDI0OGE4N2UzYjN8MjAxOS0wNC0yM1QwNzowMDowMC4wMDBafE1PUk5JTkc=", "task_schedule_id": "eb421e26-cee6-4f10-a79e-7d248a87e3b3", "care_recipient_id": "df50cac5-293c-490d-a06c-ee26796f850d", "task_definition_id": "ab7360ec-8c2f-484d-8369-0c17af5cbaf5", "task_schedule_note": "", "task_definition_description": "Ensure required items are close to hand"}',
			alert_id: null,
			task_instance_id:
				"dHxlYjQyMWUyNi1jZWU2LTRmMTAtYTc5ZS03ZDI0OGE4N2UzYjN8MjAxOS0wNC0yM1QwNzowMDowMC4wMDBafE1PUk5JTkc=",
			visit_id: "5cbe4770-8b66-f8a8-4878-b1e35339e141",
			caregiver_id: "868ffde9-b069-4af5-8835-c4ac4e72e4b5",
			payload_as_text:
				'{"id": "412f3249-239b-4dcd-9480-d9a595ca614a", "visit_id": "5cbe4770-8b66-f8a8-4878-b1e35339e141", "timestamp": "2019-04-23T06:31:27.405Z", "event_type": "task_completion_reverted", "caregiver_id": "868ffde9-b069-4af5-8835-c4ac4e72e4b5", "task_instance_id": "dHxlYjQyMWUyNi1jZWU2LTRmMTAtYTc5ZS03ZDI0OGE4N2UzYjN8MjAxOS0wNC0yM1QwNzowMDowMC4wMDBafE1PUk5JTkc=", "task_schedule_id": "eb421e26-cee6-4f10-a79e-7d248a87e3b3", "care_recipient_id": "df50cac5-293c-490d-a06c-ee26796f850d", "task_definition_id": "ab7360ec-8c2f-484d-8369-0c17af5cbaf5", "task_schedule_note": "", "task_definition_description": "Ensure required items are close to hand"}',
			rejected_event_id: null,
			observation_event_id: null,
			timestamp: "2019-04-23T06:31:27.405Z",
			id: "412f3249-239b-4dcd-9480-d9a595ca614a",
			event_type: "task_completion_reverted",
			care_recipient_id: "df50cac5-293c-490d-a06c-ee26796f850d",
		},
	],
};

export default data;
