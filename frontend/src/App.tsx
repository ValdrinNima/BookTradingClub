import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Home from "./pages";
import RequestsPage from "./pages/requests";
import SigninPage from "./pages/signin";
import UsersPage from "./pages/users";
import TradesPage from "./pages/trades";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/books" component={Home} exact />
				<Route path="/requests" component={RequestsPage} exact />
				<Route path="/trades" component={TradesPage} exact />
				<Route path="/users" component={UsersPage} exact />
				<Route path="/sigin" component={SigninPage} exact />
			</Switch>
		</Router>
	);
}

export default App;
