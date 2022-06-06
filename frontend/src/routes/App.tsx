import React, { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

import Calender from "../components/Calendar";
import { fetchVisits } from "../services/fetchEvents";
import { CalenderEvent, ValidateUserResponse } from "../types";

export default function App() {
	const [events, setEvents] = useState([] as CalenderEvent[]);
	const [date, setDate] = useState(new Date());
	const state = useLocation().state as ValidateUserResponse | null;
	const navigate = useNavigate();

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = () => {
		if (!state) {
			navigate("/");
		}
		fetchVisits(state!.id).then((res) => {
			setEvents(res);
		});
	};
	if (!state || state.id === "") {
		return <Navigate to="/" />;
	}

	return (
		<div className="container">
			<header className="w3-container w3-indigo">
				<h1>{state!.response}</h1>
			</header>
			<Calender events={events} defaultDate={date} />
		</div>
	);
}
