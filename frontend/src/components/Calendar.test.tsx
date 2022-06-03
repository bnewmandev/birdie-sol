import React from "react";

import { render, fireEvent, screen } from "../utils/testUtils";

import Calender from "./Calendar";
import data from "../mocks/data";

it("Fetches and displays Calender (displaying May 2020)", async () => {
	render(<Calender defaultDate={new Date(Date.parse("2020-05-22"))} />);

	expect(screen.getByText(/May 2020/i)).toHaveClass("rbc-toolbar-label");
});

it("Fetches and displays Calender with 1 event", async () => {
	const event1 = data.events[0];
	render(<Calender events={[event1]} defaultDate={new Date(Date.parse("2022-06-01"))} />);
	expect(screen.getByText(/Mood Observation/i)).toHaveClass("rbc-event-content");
	expect(screen.getByText(/Mood Observation/i).parentElement).toHaveStyle("background-color: blue;");
});

it("Fetches and displays Calender with several events", async () => {
	const events = data.events;
	render(<Calender events={events} defaultDate={new Date(Date.parse("2022-06-01"))} />);
	expect(screen.getByText(/Mood Observation/i)).toHaveClass("rbc-event-content");
	expect(screen.getByText(/Check In/i)).toHaveClass("rbc-event-content");
	expect(screen.getByText(/Visit Completed/i)).toHaveClass("rbc-event-content");
	expect(screen.getByText(/Concern Raised/i)).toHaveClass("rbc-event-content");
});
