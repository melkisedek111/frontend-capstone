import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import storageSession from "reduxjs-toolkit-persist/lib/storage/session";
import expireReducer from "redux-persist-expire";
import appBarSlice from "./slices/appBar.slice.js";
import userSlice from "./slices/user.slice.js";
import { authApi } from "./api/auth.api.js";
import globalSlice from "./slices/global.slice.js";
import { departmentApi } from "./api/department.api.js";
import { positionApi } from "./api/position.api.js";

const persistConfig = {
	key: "root",
	storage,
	version: 1,
	transforms: [
		expireReducer("preference", {
			expireSeconds: 86400,
			autoExpire: true,
		}),
	],
};

const persistedUserReducer = persistReducer(persistConfig, userSlice);

export default combineReducers({
	[authApi.reducerPath]: authApi.reducer,
	[departmentApi.reducerPath]: departmentApi.reducer,
	[positionApi.reducerPath]: positionApi.reducer,
	appBar: appBarSlice,
    user: persistedUserReducer,
	global: globalSlice
});