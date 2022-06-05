import React, { useEffect, useState } from "react";

import "./App.scss";

import Calender from "./components/Calendar";
import { fetchVisits } from "./services/fetchEvents";
import userValidation from "./services/userValidation";
import { CalenderEvent } from "./types";

export default function App() {
	const [recipientData, updateRecipientData] = useState({
		isAnyEntry: false,
		isIdValid: false,
		response: "No Recipient Selected",
	});
	const [events, setEvents] = useState([] as CalenderEvent[]);
	const [date, setDate] = useState(new Date());

	const fetchData = () => {
		let recipient = window.location.pathname;
		userValidation(recipient)
			.then((res) => {
				updateRecipientData(res);
				if (res.isIdValid) {
					fetchVisits(recipient).then((res) => {
						setEvents(res);
					});
				}
			})
			.catch((err) => {
				console.error(err);
			});
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="container">
			<header className="w3-container w3-indigo">
				<h1>{recipientData.response}</h1>
			</header>
			<Calender events={events} defaultDate={date} />
		</div>
	);
}
