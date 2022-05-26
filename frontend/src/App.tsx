import React from "react";

import { Link } from "react-router-dom";

import "./App";

function App() {
	return (
		<div className="container">
			<header className="w3-container w3-indigo">
				<h1>Hello World!</h1>
			</header>
			<nav className="w3-dropdown-hover">
				<button className="w3-button"></button>
				<Link to="/event-type">View by event type</Link>
			</nav>
		</div>
	);
}

export default App;
