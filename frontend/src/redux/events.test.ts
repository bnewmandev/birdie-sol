import reducer, { actions } from "./events";
import { PayloadAction } from "@reduxjs/toolkit";
import { CalenderEvent, GlobalState } from "../types";
import { addHours } from "../utils/dateUtils";

import data from "../mocks/data";

describe("testing events reducer", () => {
	it("should return the initial state", () => {
		expect(reducer(undefined, { payload: "", type: "" })).toEqual({ eventArray: [] });
	});

	it("Should handle a Calender Event being added to an empty array", () => {
		const previousState: GlobalState = { eventArray: [] };
		expect(reducer(previousState, actions.push(data.events[0]))).toEqual({
			eventArray: [data.events[0]],
		});
	});

	it("Should handle a Calender Event being added to an non empty array", () => {
		const previousState: GlobalState = { eventArray: [data.events[0]] };
		expect(reducer(previousState, actions.push(data.events[1]))).toEqual({
			eventArray: [data.events[0], data.events[1]],
		});
	});
});
