// + fluid_intake_observation
// + physical_health_observation
// - visit_completed
// + mood_observation
// - check_out
// + incontinence_pad_observation
// - check_in
// + general_observation
// + food_intake_observation
// + mental_health_observation
// - visit_cancelled
// + catheter_observation
// + toilet_visit_recorded

export interface ObservationEventPayload {
	id: string;
	visit_id: string;
	timestamp: string;
	event_type: string;
	caregiver_id: string;
	care_recipient_id: string;

	observed?: boolean;
	fluid?: string;
	consumed_volume_ml?: number;
	note?: string;
	mood?: string;
	pad_condition?: string;
	meal?: string;
	volume_ml?: number;
	visit_type?: string;
	visit_count?: number;
	navigation?: any;
}

export interface ObservationEvent {
	payload: ObservationEventPayload;
	visit_id: string;
	caregiver_id: string;
	timestamp: string;
	id: string;
	event_type: string;
	care_recipient_id: string;
}
