import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseQueryErrHandler } from "../utils/rtk.utils";

export const positionApi = createApi({
	reducerPath: "positionApi",
	baseQuery: baseQueryErrHandler,
	tagType: ["Position"],
	endpoints: (builder) => ({
		createPosition: builder.mutation({
			query: (payload) => ({
				url: "position/create_position",
				method: "POST",
				body: payload,
			}),
			invalidatesTags : ["Position"],
			async onQueryStarted(id, { dispatch, queryFulfilled }) {},
		}),
		getAllPositions: builder.query({
			query: () => ({
				url: "position/get_positions",
				method: "POST"
			}),
			providesTags: ["Position"],
		}),
	}),
});

export const { useCreatePositionMutation, useGetAllPositionsQuery } = positionApi;
