import axios from "axios";
import { ObservationEvent } from "../types/ObservationEvent";
import { TaskState } from "../types/TaskState";

export const fetchObservations = async (visitId: string) => {
	let request = `/visit?id=${visitId}`;
	if (process.env.NODE_ENV === "development") {
		request = `http://localhost:8000/visit?id=${visitId}`;
	}

	const visitData = await axios.get(request);

	if (visitData.status === 200) {
		return visitData.data.events as Array<ObservationEvent | TaskState>;
	} else {
		return [] as Array<ObservationEvent | TaskState>;
	}
};
