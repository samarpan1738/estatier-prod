import React, { useCallback, useRef, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { CSSReset, ThemeProvider } from "@chakra-ui/core";
import PropPage from "./components/PropPage/PropPage";

function App({ location }) {
	console.log(location.state);
	return (
		<div className="App">
			<ThemeProvider>
				<CSSReset />
				<PropPage />
			</ThemeProvider>
		</div>
	);
}

export default App;
