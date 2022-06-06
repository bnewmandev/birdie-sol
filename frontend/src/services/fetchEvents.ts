import axios from "axios";
import { CalenderEvent } from "../types";

export const fetchEvents = async (recipientId: string) => {
	let id = recipientId.substring(1);
	let request = `/fetchUser?id=${id}`;
	if (process.env.NODE_ENV === "development") {
		request = `http://localhost:8000/fetchUser?id=${id}`;
	}

	const eventsData = await axios.get(request, { params: { recipientId } });

	if (eventsData.status === 200) {
		const events = eventsData.data.events as Array<any>;
		const eventsWithUpdatedTimes: CalenderEvent[] = events.map((event) => ({
			...event,
			start: new Date(event.start),
			end: new Date(event.start),
		}));
		return {
			events: eventsWithUpdatedTimes,
			lastEventDate: new Date(eventsData.data.lastEventDate),
		};
	} else {
		return {
			events: [] as CalenderEvent[],
			lastEventDate: new Date(),
		};
	}
};

export const fetchVisits = async (id: string) => {
	let request = `/visits?id=${id}`;
	if (process.env.NODE_ENV === "development") {
		request = `http://localhost:8000/visits?id=${id}`;
	}

	const visitData = await axios.get(request);

	if (visitData.status === 200) {
		let visitsList: CalenderEvent[] = [];
		for (const [key, value] of Object.entries(visitData.data.visits) as [string, [number, string]][]) {
			visitsList.push({
				allDay: false,
				color: "blue",
				start: new Date(value[0]),
				end: new Date(value[0]),
				id: key,
				title: "Visit at " + new Date(value[0]).toLocaleTimeString("en-uk", { timeStyle: "short" }),
			});
		}
		return visitsList;
	} else {
		return new Array<CalenderEvent>();
	}
};
