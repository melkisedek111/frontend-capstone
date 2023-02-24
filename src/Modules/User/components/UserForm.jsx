import React, { useEffect } from "react";
import { Box, Button, Card, CardContent, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../../redux/slices/appBar.slice";
import { UserFormContainer, UserFormHeader } from "./userForm.styled.jsx";
import CustomButton from "../../Common/CustomButton/CustomButton.jsx";
import ReplyIcon from "@mui/icons-material/Reply";
import CustomTextField from "../../Common/CustomTextField/CustomTextField.jsx";
import CustomDropdown from "../../Common/CustomDropdown/CustomDropdown.jsx";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import { Link } from "react-router-dom";

const UserForm = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setCurrentPage({ pageTitle: "Users" }));
	}, []);

	return (
		<UserFormContainer>
			<UserFormHeader>
				<h4 style={{marginBottom: "20px"}}>Add New User</h4>
			</UserFormHeader>
			<Card style={{ padding: "20px 0" }}>
				<CardContent>
					<Grid container spacing={2}>
						<Grid item xs={12} md={4}>
							<Grid container spacing={1}>
								<Grid item xs={12}>
									<h3>User Information</h3>
								</Grid>
								<Grid item xs={12}>
									<CustomTextField label="First Name" fullWidth />
								</Grid>
								<Grid item xs={12}>
									<CustomTextField label="Middle Name" fullWidth />
								</Grid>
								<Grid item xs={12}>
									<CustomTextField label="Last Name" fullWidth />
								</Grid>
								<Grid item xs={12}>
									<CustomTextField label="Employee ID" fullWidth />
								</Grid>
								<Grid item xs={12}>
									<CustomTextField label="Email Address" fullWidth />
								</Grid>
								<Grid item xs={12}>
									<CustomTextField label="Contact Number" fullWidth />
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={12} md={4}>
							<Grid container spacing={1}>
								<Grid item xs={12}>
									<h3>Security Information</h3>
								</Grid>
								<Grid item xs={12}>
									<CustomDropdown
										placeholder="Select User Type"
										menuItems={[{ value: 1, label: "Weekly" }]}
										fullWidth
										displayEmpty
									/>
								</Grid>
								<Grid item xs={12}>
									<CustomTextField label="Password" fullWidth type="password" />
								</Grid>
								<Grid item xs={12}>
									<CustomTextField
										label="Confirm Password"
										fullWidth
										type="password"
									/>
								</Grid>
								<Grid item xs={12}>
									<Button fullWidth variant="contained" component="label">
										Upload Image
										<input hidden accept="image/*" multiple type="file" />
									</Button>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={12} md={4}>
							<Grid container spacing={1}>
								<Grid item xs={12}>
									<h3>Department Information</h3>
								</Grid>
								<Grid item xs={12}>
									<CustomDropdown
										placeholder="Select Department"
										menuItems={[{ value: 1, label: "Weekly" }]}
										fullWidth
										displayEmpty
									/>
								</Grid>
								<Grid item xs={12}>
									<CustomDropdown
										placeholder="Select Position"
										menuItems={[{ value: 1, label: "Weekly" }]}
										fullWidth
										displayEmpty
									/>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={12}>
							<Box
								style={{
									display: "flex",
									alignItems: "center",
									gap: "10px",
									justifyContent: "flex-end",
								}}
							>
								<Button
									variant="contained"
									size="large"
									startIcon={<AddCircleRoundedIcon />}
									style={{ backgroundColor: "#090537" }}
								>
									Add User
								</Button>
								<Link to="/users">
									<Button
										variant="contained"
										size="large"
										startIcon={<ReplyIcon />}
										color="warning"
									>
										Back
									</Button>
								</Link>
							</Box>
						</Grid>
					</Grid>
				</CardContent>
			</Card>
		</UserFormContainer>
	);
};

export default UserForm;
