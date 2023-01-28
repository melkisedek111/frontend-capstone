import React, { useRef, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import "./App.css";
import AppBar from "./Modules/AppBar/AppBar.jsx";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Modules/Dashboard/Dashboard.jsx";
import User from "./Modules/User/User.jsx";
import Requests from "./Modules/Requests/Requests.jsx";

const theme = createTheme({
	typography: {
		fontFamily: ["Montserrat"].join(","),
	},
})
const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Routes>
				<Route path="/" element={<AppBar/>}>
					<Route exact path="/" element={<Dashboard />} />
					<Route exact path="/users" element={<User />} />
					<Route exact path="/requests" element={<Requests />} />
				</Route>
			</Routes>

		</ThemeProvider>
	);
};

export default App;
