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
import Position from "./Modules/Position/Position.jsx";
import QRItems from "./Modules/QRItems/QRItems.jsx";
import Designation from "./Modules/Designation/Designation.jsx";
import Login from "./Modules/Login/Login.jsx";
import { useSelector } from "react-redux";
import { ERROR_VARIANT } from "../src/utils/app.constants.js";
import RequireAuth from "./Modules/Auth/RequireAuth.jsx";
import { useSnackbar } from "notistack";

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
	const { enqueueSnackbar } = useSnackbar();
	const global = useSelector((state) => state.global);
	const user = useSelector((state) => state.user);
	console.log({ user });
	useEffect(() => {
		if (global.message) {
			enqueueSnackbar(global.message, { variant: ERROR_VARIANT[global.code] });
		}
	}, [global]);

	return (
		<ThemeProvider theme={theme}>
			<Routes>
				<Route exact path="/login" element={<Login />} />
				<Route path="/" element={<AppBar />}>
					{/* {Pages.map((page) => (
						<Route exact path={page.path} element={page.component} />
					))} */}
					<Route
						element={
							<RequireAuth role={user?.details?.user_type} allowedRoles={[0]} />
						}
					>
						<Route exact path="/" element={<Dashboard />} />
						<Route exact path="/requests" element={<Requests />} />
						<Route exact path="/users" element={<User />} />
						<Route exact path="/users/add" element={<UserForm />} />
						<Route exact path="/departments" element={<Department />} />
						<Route exact path="/designations" element={<Designation />} />
						<Route exact path="/positions" element={<Position />} />
						<Route exact path="/qr-items" element={<QRItems />} />
					</Route>

					<Route path="*" element={<Navigate to="/" replace />} />
				</Route>
			</Routes>
		</ThemeProvider>
	);
};

export default App;
