import { Routes, Route } from "react-router-dom";

import "./styles.scss";

import App from "./routes/App";
import Home from "./routes/Home";

export const Router = () => {
	return (
		<div className="root-container">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/calender" element={<App />} />
			</Routes>
		</div>
	);
};
