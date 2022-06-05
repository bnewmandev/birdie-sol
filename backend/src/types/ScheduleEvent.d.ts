// task_schedule_created

export interface ScheduleEventPayload {
	id: string;
	note?: string;
	rrule: string;
	timestamp: string;
	event_type: string;
	caregiver_id: string;
	task_schedule_id: string;
	care_recipient_id: string;
	task_definition_id: string;
}

export interface ScheduleEvent {
	payload: ScheduleEventPayload;
	caregiver_id: string;
	timestamp: string;
	id: string;
	event_type: string;
	care_recipient_id: string;
}
