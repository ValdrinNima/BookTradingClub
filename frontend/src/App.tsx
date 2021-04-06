import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Grid from "./components/Grid";
import Footer from "./components/Footer";

function App() {
	return (
		<div>
			<Navbar></Navbar>
			<Main>
				<Grid></Grid>
			</Main>
			<Footer></Footer>
		</div>
	);
}

export default App;
