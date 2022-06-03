import React from "react";

import { render, screen, waitFor } from "./utils/testUtils";

import App from "./App";

// it("Shows that no user is selected when there is no id in the url", () => {
// 	render(<App />);
// 	expect(screen.getByRole("heading")).toHaveTextContent("No Recipient Selected");
// });

// it("Shows that an invalid user is selected when there is an invalid id", async () => {
// 	window.history.pushState({}, "Fake", "/fakeid");

// 	render(<App />);

// 	await waitFor(() => {
// 		expect(screen.getByRole("heading")).toHaveTextContent("Invalid Recipient ID");
// 	});
// });

it("Shows that a valid user is selected when there is a valid id", async () => {
	const href = `${window.origin}/df50cac5-293c-490d-a06c-ee26796f850d`;
	// eslint-disable-next-line no-restricted-globals
	window.history.replaceState(history.state, "", href);

	render(<App />);

	await waitFor(() => {
		expect(screen.getByRole("heading")).toHaveTextContent("Recipient: df50cac5-293c-490d-a06c-ee26796f850d");
	});
});

// it("Fetches and displays calender for recipient with ID 'test'", async () => {
// 	window.history.pushState("")
// 	const events = await
// })
