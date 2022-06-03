import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CalenderEvent, GlobalState } from "../types";
import { RootState } from "./store";

const initialState: GlobalState = {
	eventArray: [],
};

export const eventsSlice = createSlice({
	name: "events",
	initialState,
	reducers: {
		push: (state: GlobalState, action: PayloadAction<CalenderEvent>) => {
			state.eventArray.push(action.payload);
		},
		clear: (state: GlobalState) => {
			state.eventArray = new Array<CalenderEvent>();
		},
	},
});

export const actions = eventsSlice.actions;
export const selectEvents = (state: RootState) => state.events.eventArray;
export default eventsSlice.reducer;
