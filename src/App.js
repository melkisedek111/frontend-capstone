import React, { useRef, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import "./App.css";
import AppBar from "./Modules/AppBar/AppBar.jsx";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./Modules/Dashboard/Dashboard.jsx";
import User from "./Modules/User/User.jsx";
import Requests from "./Modules/Requests/Requests.jsx";
import UserForm from "./Modules/User/components/UserForm.jsx";
import Department from "./Modules/Department/Department.jsx";

const theme = createTheme({
	typography: {
		fontFamily: ["Montserrat"].join(","),
	},
});

const Pages = [
	{
		title: "Dashboard",
		component: <Dashboard />,
		path: "/",
	},
	{
		title: "Requests",
		component: <Requests />,
		path: "/requests",
	},
	{
		title: "Users",
		component: <User />,
		path: "/users",
	},
];

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Routes>
				<Route path="/" element={<AppBar />}>
					{/* {Pages.map((page) => (
						<Route exact path={page.path} element={page.component} />
					))} */}
					<Route exact path="/" element={<Dashboard />} />
					<Route exact path="/requests" element={<Requests />} />
					<Route exact path="/users" element={<User />} />
					<Route exact path="/users/add" element={<UserForm />} />
					<Route exact path="/department" element={<Department />} />
					<Route path="*" element={<Navigate to="/" replace />} />
				</Route>
			</Routes>
		</ThemeProvider>
	);
};

export default App;
