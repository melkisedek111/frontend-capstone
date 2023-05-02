require("file-loader?name=[name].[ext]!./index.html");
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import { persistor, store } from "./redux/store";
import { SnackbarProvider } from "notistack";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<SnackbarProvider maxSnack={3}>
					<App />
				</SnackbarProvider>
			</PersistGate>
		</Provider>
	</BrowserRouter>
);
