import { Alert } from "./Alert";
import { MedicationEvent } from "./MedicationEvent";
import { ObservationEvent } from "./ObservationEvent";
import { ScheduleEvent } from "./ScheduleEvent";
import { TaskState } from "./TaskState";

export const parseType = (data: any): ObservationEvent | TaskState | Alert | ScheduleEvent | MedicationEvent => {
	if (data["visit_id"] && data["caregiver_id"]) {
		return data as ObservationEvent;
	} else if (data["task_instance_id"]) {
		return data as TaskState;
	} else if (data["alert_id"]) {
		return data as Alert;
	} else if (data["caregiver_id"] && data["care_recipient_id"]) {
		return data as ScheduleEvent;
	} else if (data["care_recipient_id"]) {
		return data as MedicationEvent;
	} else {
		throw new Error("Invalid Data");
	}
};
