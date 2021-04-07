import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Grid from "./components/Grid";
import Footer from "./components/Footer";
import Header from "./components/Header";

import { ThemeProvider } from "styled-components";

const theme = {
	primary: "blue",
	secondary: "#333333",
};

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div>
				<Navbar></Navbar>
				<Main>
					<Header></Header>
					<Grid></Grid>
				</Main>
				<Footer></Footer>
			</div>
		</ThemeProvider>
	);
}

export default App;
