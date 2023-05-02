import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import {
	persistStore,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";
import rootReducer from "./rootReducer";
import { authApi } from "./api/auth.api";
import { departmentApi } from "./api/department.api";
import { positionApi } from "./api/position.api";

const logger = createLogger();

const middlewares = [authApi.middleware, departmentApi.middleware, positionApi.middleware];

if (process.env.NODE_ENV === "development") {
	middlewares.push(logger);
}

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>       
		getDefaultMiddleware({
			serializableCheck: {
				ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat(middlewares),
});

export const persistor = persistStore(store);

export const purgePersistor = () => {
	window.localStorage.clear();
	persistor.purge();
}