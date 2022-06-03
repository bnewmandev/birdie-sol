import "react-big-calendar/lib/css/react-big-calendar.css";

import React from "react";

import { useAppSelector } from "../redux/hooks";

import { selectEvents } from "../redux/events";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { CalenderEvent } from "../types";

import { useDispatch, useSelector } from "react-redux";

const localizer = momentLocalizer(moment);

export default function Calender() {
	const dispatch = useDispatch();
	const eventArray = useSelector(selectEvents);

	return (
		<div className="w3-container w3-margin-top">
			<Calendar
				data-testid="calender"
				localizer={localizer}
				events={eventArray}
				startAccessor="start"
				endAccessor="end"
				style={{ height: 500 }}
				eventPropGetter={(event: CalenderEvent, start, end, isSelected) => ({
					event,
					start,
					end,
					isSelected,
					style: { backgroundColor: event.color },
				})}
			/>
		</div>
	);
}
