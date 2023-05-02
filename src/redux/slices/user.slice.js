import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: "user",
	initialState: {
		details: undefined,
		isLoggedIn: false,
		JWTToken: undefined,
	},
	reducers: {
		setCurrentUser: (state, action) => {
			if (action.payload?.details) {
				state.details = action.payload?.details;
				state.JWTToken = action.payload?.token;
				state.isLoggedIn = true;
			}
		},
		removeCurrentUser: async (state, action) => {
			state.details = undefined;
			state.isLoggedIn = false;
			state.JWTToken = undefined;
		},
	},
});

export const { setCurrentUser, removeCurrentUser } = userSlice.actions;
export default userSlice.reducer;
