import React from "react";

import { Link } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>Hello World!</h1>
			</header>
			<nav>
				<Link to="/event-type">View by event type</Link>
			</nav>
		</div>
	);
}

export default App;
