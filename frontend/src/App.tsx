import React, { useEffect, useState } from "react";

import "./App.scss";

import Calender from "./components/Calendar";
import data from "./mocks/data";
import checkRecipientExists from "./services/userValidation";

let recipient = window.location.pathname;
recipient = recipient.substring(-1);

export default function App() {
	const [recipientData, updateRecipientData] = useState({
		isAnyEntry: false,
		isIdValid: false,
		response: "No Recipient Selected",
	});
	const [recipientId, setRecipientId] = useState("");

	useEffect(() => {
		const data = checkRecipientExists(recipient);
		data.then((res) => {
			updateRecipientData(res);
		});
	}, [recipientData.response]);

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
