import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import storageSession from "reduxjs-toolkit-persist/lib/storage/session";
import expireReducer from "redux-persist-expire";
import appBarSlice from "./slices/appBar.slice.js";
import userSlice from "./slices/user.slice.js";

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
	appBar: appBarSlice,
    user: persistedUserReducer
});