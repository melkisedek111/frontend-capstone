import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { CustomPaginationContainer } from "./customPagination.styled.jsx";

const CustomPagination = () => {
	return (
		<CustomPaginationContainer>
			<Stack spacing={2}>
				<Pagination count={10} variant="outlined" shape="rounded" />
			</Stack>
		</CustomPaginationContainer>
	);
};

export default CustomPagination;
