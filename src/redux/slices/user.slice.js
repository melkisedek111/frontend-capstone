import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: "appBar",
	initialState: {
		user: undefined
	},
	reducers: {
		setCurrentUser: (state, action) => {
			if (action.payload?.pageTitle) {
				state.currentPage = action.payload?.pageTitle;
			}
		},
	},
});

export const { setCurrentUser } = userSlice.actions;
export default userSlice.reducer;
