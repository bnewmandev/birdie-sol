// alert_raised
// alert_qualified

export interface AlertPayload {
	id: string;
	alert_id: string;
	timestamp: string;
	event_type: string;
	care_recipient_id: string;
	observation_event_id: string;
	caregiver_id?: string;
	alert_severity?: string;
}

export interface Alert {
	payload: AlertPayload;
	alert_id: string;
	timestamp: string;
	id: string;
	event_type: string;
	care_recipient_id: string;
	caregiver_id?: string;
	observation_event_id?: string;
}
