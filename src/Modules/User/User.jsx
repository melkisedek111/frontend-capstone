import { Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../redux/slices/appBar.slice.js";
import CustomButton from "../Common/CustomButton/CustomButton.jsx";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import {
	UserCardLists,
	UserContainer,
	UserHeaderContainer,
	UserSection,
} from "./user.styled.jsx";
import CustomTextField from "../Common/CustomTextField/CustomTextField.jsx";
import CustomDropdown from "../Common/CustomDropdown/CustomDropdown.jsx";
import SearchIcon from "@mui/icons-material/Search";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import UserCard from "./components/UserCard.jsx";
import CustomPagination from "../Common/CustomPagination/CustomPagination.jsx";
import { Link } from "react-router-dom";

const User = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setCurrentPage({ pageTitle: "Users" }));
	}, []);

	return (
		<UserSection>
			<UserContainer>
				<UserHeaderContainer>
					<Box marginBottom={2}>
						<Link to="/users/add">
							<CustomButton icon={<GroupAddIcon />} label="Add User" />
						</Link>
					</Box>
					<Grid container spacing={1}>
						<Grid item xs={12} md={4}>
							<CustomTextField
								placeholder="Search"
								icon={<SearchIcon />}
								fullWidth
							/>
						</Grid>
						<Grid item xs={12} md={2}>
							<CustomDropdown
								placeholder="Select Department"
								menuItems={[{ value: 1, label: "Weekly" }]}
								fullWidth
								displayEmpty
							/>
						</Grid>
						<Grid item xs={12} md={2}>
							<CustomDropdown
								placeholder="Select Position"
								menuItems={[{ value: 1, label: "Weekly" }]}
								fullWidth
								displayEmpty
							/>
						</Grid>
						<Grid item xs={12} md={2}>
							<CustomDropdown
								placeholder="Select User Type"
								menuItems={[{ value: 1, label: "Weekly" }]}
								fullWidth
								displayEmpty
							/>
						</Grid>
						<Grid item xs={12} md={2}>
							<CustomButton
								icon={<PersonSearchIcon />}
								label="Search"
								fullWidth={true}
								fullHeight={true}
							/>
						</Grid>
					</Grid>
				</UserHeaderContainer>
				<UserCardLists>
					<Grid container spacing={1}>
						<Grid item xs={12} md={4} lg={4} xl={3}>
							<UserCard />
						</Grid>
						<Grid item xs={12} md={4} lg={4} xl={3}>
							<UserCard />
						</Grid>
						<Grid item xs={12} md={4} lg={4} xl={3}>
							<UserCard />
						</Grid>
						<Grid item xs={12} md={4} lg={4} xl={3}>
							<UserCard />
						</Grid>
						<Grid item xs={12} md={4} lg={4} xl={3}>
							<UserCard />
						</Grid>
						<Grid item xs={12} md={4} lg={4} xl={3}>
							<UserCard />
						</Grid>
					</Grid>
				</UserCardLists>
				<CustomPagination />
			</UserContainer>
		</UserSection>
	);
};

export default User;
