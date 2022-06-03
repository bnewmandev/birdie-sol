import "react-big-calendar/lib/css/react-big-calendar.css";

import React from "react";

import { selectEvents } from "../redux/events";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { CalendarProps, CalenderEvent } from "../types";

import { useSelector } from "react-redux";

const localizer = momentLocalizer(moment);

const MyCalendar = ({ defaultDate, events = [] }: CalendarProps) => {
	// const eventArray = useSelector(selectEvents);

	return (
		<div className="w3-container w3-margin-top">
			<Calendar
				localizer={localizer}
				events={events}
				defaultDate={defaultDate}
				startAccessor="start"
				endAccessor="end"
				style={{ height: "90vh" }}
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
};

// MyCalendar.propTypes = {
// 	date: PropTypes.instanceOf(Date),
// };

export default MyCalendar;
