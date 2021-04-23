import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Home from "./pages";
import RequestsPage from "./pages/requests";
import RegisterPage from "./pages/regsiter";
import UsersPage from "./pages/users";
import TradesPage from "./pages/trades";
import LoginPage from "./pages/login";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/books" component={Home} exact />
				<Route path="/requests" component={RequestsPage} exact />
				<Route path="/trades" component={TradesPage} exact />
				<Route path="/users" component={UsersPage} exact />
				<Route path="/register" component={RegisterPage} exact />
				<Route path="/login" component={LoginPage} exact />
			</Switch>
		</Router>
	);
}

export default App;
