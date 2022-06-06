import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";

import "@testing-library/jest-dom";

import { Router as Root } from "../Router";

test("Navigation and rendering of the application", async () => {
	render(<Root />, { wrapper: MemoryRouter });
	expect(screen.getByText(/Please Login Using A Recipient ID/i)).toBeInTheDocument();
	fireEvent.change(screen.getByPlaceholderText(/f1cda890-d4cf-4b65-9999-2ec75666f45d/i), {
		target: { value: "df50cac5-293c-490d-a06c-ee26796f850d" },
	});
	fireEvent.click(screen.getByRole("button"));

	await waitFor(() => {
		expect(screen.getByText(/Recipient: df50cac5-293c-490d-a06c-ee26796f850d/i)).toBeInTheDocument();
	});
});
