import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseQueryErrHandler } from "../utils/rtk.utils";

export const authApi = createApi({
	reducerPath: "authApi",
	baseQuery: baseQueryErrHandler,
	tagType: ["auth"],
	endpoints: (builder) => ({
		signin: builder.mutation({
			query: (payload) => ({
				url: "auth/local/signin",
				method: "POST",
				body: payload,
			}),
			invalidatesTags : ["auth"],
			async onQueryStarted(id, { dispatch, queryFulfilled }) {},
		}),
	}),
});

export const { useSigninMutation } = authApi;
