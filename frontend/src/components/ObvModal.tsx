import React, { useEffect, useState } from "react";
import { ObservationEventPayload } from "../types/ObservationEvent";
import { TaskStatePayload } from "../types/TaskState";
import ReactDOM from "react-dom";
import { readable } from "../utils/readable";

const ObvModal = ({ data, hide }: { data?: ObservationEventPayload | TaskStatePayload; hide: VoidFunction }) => {
	if (!data) {
		return null;
	}
	const timeString = new Date(data.timestamp).toLocaleTimeString("en-uk", { timeStyle: "short" });

	return ReactDOM.createPortal(
		<React.Fragment>
			<div id={data.id} className="w3-modal" style={{ display: "block", zIndex: 15 }} onClick={hide}>
				<div className="w3-modal-content" onClick={(e) => e.stopPropagation()}>
					<div className="w3-container">
						<span onClick={hide} className="w3-button w3-display-topright">
							&times;
						</span>
						<div className="w3-container">
							<h2>
								{readable(data.event_type)} at {timeString}
							</h2>
							<ul className="w3-ul">
								{Object.entries(data).map((entry) => {
									const [key, value] = entry;
									return <ListItem key={key + "k"} mykey={readable(key)} value={value} />;
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

const ListItem = ({ mykey, value }: { mykey: string; value: string | number }) => {
	return (
		<li style={{ wordWrap: "break-word" }}>
			<strong>{mykey}</strong>: {value}
		</li>
	);
};

export default ObvModal;
