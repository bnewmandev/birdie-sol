// medication_schedule_updated
// medication_schedule_created

export interface MedicationEventPayload {
	id: string;
	note: string;
	type: string;
	rrule: string;
	user_id: string;
	dose_size: string;
	timestamp: string;
	event_type: string;
	care_recipient_id: string;
	medical_product_id: string;
	medication_schedule_id: string;
}

export interface MedicationEvent {
	payload: MedicationEventPayload | string;
	timestamp: string;
	id: string;
	event_type: string;
	care_recipient_id: string;
}
