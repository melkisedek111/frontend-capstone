import React, { useEffect, useState } from "react";
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
import { useGetAllDepartmentsQuery } from "../../../redux/api/department.api";
import { useGetAllPositionsQuery } from "../../../redux/api/position.api";
import { handleFieldChange } from "../../../helpers/form.helper.jsx";

const UserForm = () => {
	const dispatch = useDispatch();
	const getAllDepartments = useGetAllDepartmentsQuery();
	const getAllPositions = useGetAllPositionsQuery();
	const [departments, setDepartments] = useState([]);
	const [positions, setPositions] = useState([]);
	const [selectedDepartment, setSelectedDepartment] = useState(undefined);
	const [selectedPosition, setSelectedPosition] = useState(undefined);
	const [selectedUserType, setSelectedUserType] = useState(undefined);
	const [errors, setErrors] = useState({});
	const [formFields, setFormFields] = useState({
		firstName: {
			value: "",
			type: "letter|space|dot",
			label: "First Name",
		},
		middleName: {
			value: "",
			type: "letter|space|dot",
			label: "Middle Name",
		},
		lastName: {
			value: "",
			type: "letter|space|dot",
			label: "Last Name",
		},
		employeeID: {
			value: "",
			label: "Employee ID",
		},
		email: {
			value: "",
			type: "email",
			label: "Email Address",
		},
		contactNumber: {
			value: "",
			type: "digit",
			label: "Contact Number",
		},
		password: {
			value: "",
			type: "password",
			label: "Password",
		},
		confirmPassword: {
			value: "",
			type: "confirm",
			label: "Confirm Password",
		},
	});

	const userTypes = [
		{ value: 0, label: "Super Admin" },
		{ value: 1, label: "Admin" },
		{ value: 2, label: "Regular" },
	];

	/**
	 * DOCUMENT: This functions is used handle on change values for every field <br>
	 * Triggered: when inserting a value <br>
	 * Last Updated Date: February 19, 2023
	 * @function
	 * @memberOf AddDepartmentForm
	 * @param event - { event }
	 * @author Mel
	 */
	const handleFormFieldChange = (event) => {
		handleFieldChange(event, formFields, setFormFields);
	};

	useEffect(() => {
		dispatch(setCurrentPage({ pageTitle: "Users" }));
	}, []);

	useEffect(() => {
		const { isError, isSuccess, data } = getAllDepartments;

		if (!isError && isSuccess) {
			const {
				result: { departments: fetchDepartments },
			} = data;
			const modifiedDepartments = fetchDepartments.map((item) => ({
				value: item.id,
				label: item.name,
			}));
			setDepartments(modifiedDepartments);
		}
	}, [getAllDepartments]);

	useEffect(() => {
		const { isError, isSuccess, data } = getAllPositions;

		if (!isError && isSuccess) {
			const {
				result: { positions: fetchPositions },
			} = data;
			const modifiedPositions = fetchPositions.map((item) => ({
				value: item.id,
				label: item.name,
			}));
			setPositions(modifiedPositions);
		}
	}, [getAllPositions]);

	return (
		<UserFormContainer>
			<UserFormHeader>
				<h4 style={{ marginBottom: "20px" }}>Add New User</h4>
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
									<CustomTextField
										id="firstName"
										name="firstName"
										label={formFields.firstName.label}
										placeholder="Please enter the first name"
										variant="outlined"
										className="fields"
										fullWidth
										helperText={errors?.firstName}
										error={errors?.firstName}
										value={formFields.firstName.value || ""}
										onChange={handleFormFieldChange}
									/>
								</Grid>
								<Grid item xs={12}>
									<CustomTextField
										id="firstName"
										name="firstName"
										label={formFields.firstName.label}
										placeholder="Please enter the first name"
										variant="outlined"
										className="fields"
										fullWidth
										helperText={errors?.firstName}
										error={errors?.firstName}
										value={formFields.firstName.value || ""}
										onChange={handleFormFieldChange}
									/>
								</Grid>
								<Grid item xs={12}>
									<CustomTextField
										id="lastName"
										name="lastName"
										label={formFields.lastName.label}
										placeholder="Please enter the last name"
										variant="outlined"
										className="fields"
										fullWidth
										helperText={errors?.lastName}
										error={errors?.lastName}
										value={formFields.lastName.value || ""}
										onChange={handleFormFieldChange}
									/>
								</Grid>
								<Grid item xs={12}>
									<CustomTextField
										id="employeeID"
										name="employeeID"
										label={formFields.employeeID.label}
										placeholder="Please enter the employee ID"
										variant="outlined"
										className="fields"
										fullWidth
										helperText={errors?.employeeID}
										error={errors?.employeeID}
										value={formFields.employeeID.value || ""}
										onChange={handleFormFieldChange}
									/>
								</Grid>
								<Grid item xs={12}>
									<CustomTextField
										id="email"
										name="email"
										label={formFields.email.label}
										placeholder="Please enter the email address"
										variant="outlined"
										className="fields"
										fullWidth
										helperText={errors?.email}
										error={errors?.email}
										value={formFields.email.value || ""}
										onChange={handleFormFieldChange}
									/>
								</Grid>
								<Grid item xs={12}>
									<CustomTextField
										id="contactNumber"
										name="contactNumber"
										label={formFields.contactNumber.label}
										placeholder="Please enter the contact number"
										variant="outlined"
										className="fields"
										fullWidth
										helperText={errors?.contactNumber}
										error={errors?.contactNumber}
										value={formFields.contactNumber.value || ""}
										onChange={handleFormFieldChange}
									/>
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
										menuItems={userTypes}
										fullWidth
										displayEmpty
										onChange={(event) =>
											setSelectedUserType(event.target.value)
										}
										value={selectedUserType}
									/>
								</Grid>
								<Grid item xs={12}>
								<CustomTextField
										id="password"
										name="password"
										label={formFields.password.label}
										placeholder="Please enter the password"
										variant="outlined"
										className="fields"
										fullWidth
										helperText={errors?.password}
										error={errors?.password}
										value={formFields.password.value || ""}
										onChange={handleFormFieldChange}
									/>
								</Grid>
								<Grid item xs={12}>
									<CustomTextField
										id="confirmPassword"
										name="confirmPassword"
										label={formFields.confirmPassword.label}
										placeholder="Please confirm the password"
										variant="outlined"
										className="fields"
										fullWidth
										helperText={errors?.confirmPassword}
										error={errors?.confirmPassword}
										value={formFields.confirmPassword.value || ""}
										onChange={handleFormFieldChange}
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
										menuItems={departments}
										fullWidth
										displayEmpty
										onChange={(event) =>
											setSelectedDepartment(event.target.value)
										}
										value={selectedDepartment}
									/>
								</Grid>
								<Grid item xs={12}>
									<CustomDropdown
										placeholder="Select Position"
										menuItems={positions}
										fullWidth
										displayEmpty
										onChange={(event) =>
											setSelectedPosition(event.target.value)
										}
										value={selectedPosition}
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
