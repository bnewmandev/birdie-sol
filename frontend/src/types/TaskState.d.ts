// task_completed
// regular_medication_taken
// no_medication_observation_received
// regular_medication_not_taken
// task_completion_reverted
// regular_medication_maybe_taken
// regular_medication_partially_taken

export interface TaskStatePayload {
	id: string;
	timestamp: string;
	event_type: string;
	care_recipient_id: string;
	task_instance_id: string;

	visit_id?: string;
	caregiver_id?: string;

	task_schedule_id?: string;
	task_definition_id?: string;
	task_schedule_note?: string;
	task_definition_description?: string;
	note?: string;
	medication_failure_reason?: string;
	medication_type?: string;
}

export interface TaskState {
	payload: TaskStatePayload | string;
	timestamp: string;
	id: string;
	event_type: string;
	care_recipient_id: string;
	task_instance_id: string;
	visit_id?: string;
	caregiver_id?: string;
}
