import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import React from "react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

import { Router as Root } from "../Router";
import "@testing-library/jest-dom";

import { ValidateUserResponse } from "../types";

it("Fetches and displays calender for recipient", async () => {
	const history = createMemoryHistory();
	history.push("/calender", {
		id: "df50cac5-293c-490d-a06c-ee26796f850d",
		isAnyEntry: true,
		isIdValid: true,
		response: "Recipient: df50cac5-293c-490d-a06c-ee26796f850d",
	} as ValidateUserResponse);

	render(
		<Router location={history.location} navigator={history}>
			<Root />
		</Router>
	);
	await waitFor(() => {
		expect(screen.getByText(/Recipient: df50cac5-293c-490d-a06c-ee26796f850d/i)).toBeInTheDocument();
	});
});
