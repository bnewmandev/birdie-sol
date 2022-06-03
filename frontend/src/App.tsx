import React, { useEffect, useState } from "react";

import "./App.scss";

import Calender from "./components/Calendar";
import data from "./mocks/data";
import userValidation from "./services/userValidation";

export default function App() {
	const [recipientData, updateRecipientData] = useState({
		isAnyEntry: false,
		isIdValid: false,
		response: "No Recipient Selected",
	});
	const [recipientId, setRecipientId] = useState("");

	const fetchData = () => {
		let recipient = window.location.pathname;
		recipient = recipient.substring(-1);
		userValidation(recipient)
			.then((res) => {
				updateRecipientData(res);
			})
			.catch((err) => {
				console.error(err);
			});
	};

	useEffect(() => {
		fetchData();
	}, []);

	const events = data.events;

	return (
		<div className="container">
			<header className="w3-container w3-indigo">
				<h1>{recipientData.response}</h1>
			</header>
			<Calender events={events} />
		</div>
	);
}
