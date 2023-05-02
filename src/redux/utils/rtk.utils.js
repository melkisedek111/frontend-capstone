import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import { URLConstants } from "../../config/constants";
import { removeCurrentUser } from "../slices/user.slice";
// import { setResponseState, apiRequestState, resetLoadingState } from "../redux/reducer/global.slice.js";

const endpointsWithNoLoading = ["getProducts", "addItemToCart", "getCartItems", "getOrders", "getAllCustomers", "getAllOrders"];

const baseQuery = fetchBaseQuery({ baseUrl: URLConstants.BACKEND_URL, prepareHeaders: (headers, { getState }) => {
	const token = getState().user.JWTToken;

    if(token){
		headers.set("Authorization", `Bearer ${token}`);
	}
	return headers;
} });

export const baseQueryErrHandler = async (args, api, extraOptions) => {
	const preventLoading = !endpointsWithNoLoading.includes(api.endpoint);
	// api.dispatch(resetLoadingState());
	// if(preventLoading){
	// 	api.dispatch(apiRequestState());
	// }

	let result = await baseQuery(args, api, extraOptions);
	if(result) {
		const { error } = result;
		if(error){
			const { status, data } = error;
			if(status === 400 || status === 401){
				api.dispatch(removeCurrentUser());
			}
		}
        // if(result?.data || result?.error) {
		// 	setTimeout(() => {
		// 		api.dispatch(setResponseState(result?.data));
		// 	}, 1500)
        // }
    }
	return result;
};
