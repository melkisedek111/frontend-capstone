import { createSlice } from "@reduxjs/toolkit";

const appBarSlice = createSlice({
	name: "appBar",
	initialState: {
		currentPage: "",
	},
	reducers: {
		setCurrentPage: (state, action) => {
			if (action.payload?.pageTitle) {
				state.currentPage = action.payload?.pageTitle;
			}
		},
	},
});

export const { setCurrentPage } = appBarSlice.actions;
export default appBarSlice.reducer;
