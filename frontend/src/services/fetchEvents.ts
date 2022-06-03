import axios from "axios";

const fetchEvents = async (recipientId: string) => {
	const eventsData = await axios.get("", { params: { recipientId } }); // TODO Implement route to fetch events data
	if (eventsData.status === 200) {
		return eventsData;
	} else {
		return null;
	}
};

export default fetchEvents;
