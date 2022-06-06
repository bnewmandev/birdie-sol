import React, { useState } from "react";
import userValidation from "../services/userValidation";
import { useNavigate } from "react-router-dom";

export default function Home() {
	const [id, setId] = useState("");
	const navigate = useNavigate();

	const login = async (e: React.MouseEvent) => {
		e.preventDefault();
		const response = await userValidation(id);
		if (!response.isAnyEntry) {
			return alert("Please enter a recipient ID");
		}
		if (!response.isIdValid) {
			return alert("This is not a valid ID");
		}
		navigate("../calender", { replace: true, state: response });
	};

	return (
		<div className="w3-container">
			<div className="w3-display-middle w3-card-4 w3-light-grey w3-mobile w3-round " style={{ width: "75%" }}>
				<form className="w3-container ">
					<h2>Please Login Using A Recipient ID</h2>
					<p />
					<label htmlFor="id-input">Recipient ID</label>
					<p />
					<input
						onChange={(e) => setId(e.target.value)}
						type="text"
						id="id-input"
						className="w3-input w3-border"
						placeholder="f1cda890-d4cf-4b65-9999-2ec75666f45d"
					/>
					<p />
					<button onClick={(e) => login(e)} className="w3-btn w3-blue">
						Login
					</button>
					<p />
				</form>
			</div>
		</div>
	);
}
