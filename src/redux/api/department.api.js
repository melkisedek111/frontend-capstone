import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseQueryErrHandler } from "../utils/rtk.utils";

export const departmentApi = createApi({
	reducerPath: "departmentApi",
	baseQuery: baseQueryErrHandler,
	tagType: ["Department"],
	endpoints: (builder) => ({
		createDepartment: builder.mutation({
			query: (payload) => ({
				url: "department/create_department",
				method: "POST",
				body: payload,
			}),
			invalidatesTags : ["Department"],
			async onQueryStarted(id, { dispatch, queryFulfilled }) {},
		}),
		getAllDepartments: builder.query({
			query: () => ({
				url: "department/get_departments",
				method: "POST"
			}),
			providesTags: ['Department'],
		}),
	}),
});

export const { useCreateDepartmentMutation, useGetAllDepartmentsQuery } = departmentApi;
