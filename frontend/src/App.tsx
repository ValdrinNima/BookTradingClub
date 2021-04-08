import React from "react";
// import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
// import Sidebar from "./components/Sidebar";
import Home from "./pages";

function App() {
	return (
		<Router>
			<Home />
		</Router>
	);
}

export default App;
