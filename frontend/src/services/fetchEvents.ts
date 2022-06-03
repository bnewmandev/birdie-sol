import axios from "axios";
import { CalenderEvent } from "../types";

const fetchEvents = async (recipientId: string) => {
	let id = recipientId.substring(1);
	let request = `/fetchUser?id=${id}`;
	if (process.env.NODE_ENV === "development") {
		request = `http://localhost:8000/fetchUser?id=${id}`;
	}

	const eventsData = await axios.get(request, { params: { recipientId } }); // TODO Implement route to fetch events data

	if (eventsData.status === 200) {
		return {
			events: eventsData.data.events as CalenderEvent[],
			lastEventDate: new Date(eventsData.data.lastEventDate),
		};
	} else {
		return {
			events: [] as CalenderEvent[],
			lastEventDate: new Date(),
		};
	}
};

export default fetchEvents;
