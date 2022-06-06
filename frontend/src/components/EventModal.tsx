import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { fetchObservations } from "../services/fetchObservations";
import { CalenderEvent } from "../types";
import { ObservationEvent } from "../types/ObservationEvent";
import { TaskState } from "../types/TaskState";
import ObvModal from "./ObvModal";
import { readable } from "../utils/readable";

import { toTimeString } from "../utils/dateUtils";

const EventModal = ({ event_meta }: { event_meta: CalenderEvent }) => {
	const [eventData, setEventData] = useState({ events: [] } as { events: (ObservationEvent | TaskState)[] });
	const [obvModal, setObvModal] = useState(<></>);

	function hide() {
		setObvModal(<></>);
		document.getElementById(event_meta.id)!.classList.remove("modal-open");
	}

	useEffect(() => {
		fetchObservations(event_meta.id).then((data) => {
			setEventData({ events: data });
		});
	}, []);

	const buttonHandler = (row: ObservationEvent | TaskState) => {
		const data = row.payload as ObservationEvent | TaskState;
		setObvModal(<ObvModal data={data} key={row.id} hide={hide} />);
		document.getElementById(event_meta.id)!.classList.add("modal-open");
	};
	return ReactDOM.createPortal(
		<React.Fragment>
			{obvModal}
			<div
				id={event_meta.id}
				className="w3-modal"
				onClick={() => {
					document.getElementById(event_meta.id)!.style.display = "none";
				}}
			>
				<div className="w3-modal-content" onClick={(e) => e.stopPropagation()}>
					<div className="w3-container">
						<span
							onClick={() => {
								document.getElementById(event_meta.id)!.style.display = "none";
								document.body.classList.remove("modal-open");
							}}
							className="w3-button w3-display-topright"
						>
							&times;
						</span>
						<div className="w3-container">
							<h2>
								Visit at {toTimeString(event_meta.start)} on{" "}
								{event_meta.start.toLocaleDateString("en-uk", { dateStyle: "short" })}
							</h2>
							<h3>The following events occured during this visit</h3>
							<ul className="w3-ul">
								{eventData.events.map((row) => {
									return (
										<li>
											<button onClick={() => buttonHandler(row)} className="w3-button">
												{readable(row.event_type)} - {toTimeString(row.timestamp)}
											</button>
										</li>
									);
								})}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>,
		document.body
	);
};

export default EventModal;
