import "react-big-calendar/lib/css/react-big-calendar.css";

import React from "react";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { CalendarProps, CalenderEvent } from "../types";

import { useSelector } from "react-redux";
import EventModal from "./EventModal";

const localizer = momentLocalizer(moment);

const MyCalendar = ({ defaultDate, events = [] }: CalendarProps) => {
	// const eventArray = useSelector(selectEvents);
	return (
		<div className="w3-container w3-margin-top">
			<Calendar
				localizer={localizer}
				events={events}
				defaultDate={new Date("2019-05-12")}
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
				defaultView="month"
				views={["month", "day", "week"]}
				length={7}
				onSelectEvent={(e) => {
					const elem = document.getElementById(e.id)!;
					elem.style.zIndex = "10";
					elem.style.display = "block";
					document.body.classList.add("modal-open");
				}}
			/>
			{events.map((visit) => (
				<EventModal key={"k" + visit.id} event_meta={visit} />
			))}
		</div>
	);
};

// MyCalendar.propTypes = {
// 	date: PropTypes.instanceOf(Date),
// };

export default MyCalendar;
