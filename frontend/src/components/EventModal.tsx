import React, { useState } from "react";

const EventModal = ({ event_id }: { event_id: string }) => {
	const [eventData, setEventData] = useState(new Array<string>());
	const fetchData = (id: string) => {};
	return (
		<div id={event_id} className="w3-modal">
			<div className="w3-modal-content">
				<div className="w3-container">
					<span
						onClick={() => {
							document.getElementById(event_id)!.style.display = "none";
						}}
						className="w3-button w3-display-topright"
					>
						&times;
					</span>
					<ul className="w3-ul">
						{content.map((row, i) => {
							return <li id={i.toString()}>{row}</li>;
						})}
					</ul>
				</div>
			</div>
		</div>
	);
};
