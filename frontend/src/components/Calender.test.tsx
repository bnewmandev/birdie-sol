import React from "react";

import { render, fireEvent, screen } from "../utils/testUtils";

import Calender from "./Calender";
import data from "../mocks/data";

it("Fetches and displays Calender", async () => {
	render(<Calender />);

	expect(screen.getByText(/2022/i)).toHaveClass("rbc-toolbar-label");
});

it("Fetches and displays Calender with 1 event", async () => {
	render(<Calender />);

	expect(screen.getByText(/2022/i)).toHaveClass("rbc-toolbar-label");
});
