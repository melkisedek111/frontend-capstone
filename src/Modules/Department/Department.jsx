import React, { useEffect } from "react";
import {
	DepartmentFormContainer,
	DepartmentSection,
} from "./department.styled.jsx";
import CustomTable from "../Common/CustomTable/CustomTable.jsx";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../redux/slices/appBar.slice.js";
import CustomButton from "../Common/CustomButton/CustomButton.jsx";
import { Box, Grid, IconButton, TableCell, TextField } from "@mui/material";
import CustomTextField from "../Common/CustomTextField/CustomTextField.jsx";
import CustomDropdown from "../Common/CustomDropdown/CustomDropdown.jsx";
import { handleFieldChange } from "../../helpers/form.helper.jsx";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddDepartmentRequestFormModal from "./AddDepartmentRequestFormModal.jsx";


const tableCells = {
	id: (value) => (
		<TableCell style={{textAlign: "center"}} id={value} scope="row">
			{value}
		</TableCell>
	),
	name: (value) => (
		<TableCell style={{textAlign: "center"}} id={value} scope="row" >
			{value}
		</TableCell>
	),
	initials: (value) => (
		<TableCell style={{textAlign: "center"}} id={value} scope="row" align="right">
			{value}
		</TableCell>
	),
	isActive: (value) => (
		<TableCell style={{textAlign: "center"}} id={value} scope="row" align="right">
			{value ? "Active" : "Inactive"}
		</TableCell>
	),
	isWithAction: (value) => (
		<TableCell style={{textAlign: "center"}} id={value} scope="row" align="right">
			<Box>
				<IconButton aria-label="delete">
					<DeleteIcon />
				</IconButton>
				<IconButton aria-label="delete">
					<EditIcon />
				</IconButton>
			</Box>
		</TableCell>
	),
};

const Department = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setCurrentPage({ pageTitle: "Department" }));
	}, []);

	/**
	 * DOCUMENT: This functions is used handle on change values for every field <br>
	 * Triggered: when inserting a value <br>
	 * Last Updated Date: February 19, 2023
	 * @function
	 * @memberOf AddRequestForm
	 * @param event - { event }
	 * @author Mel
	 */
	const handleFormFieldChange = (event) => {
		// handleFieldChange(event, formFields, setFormFields);
	};

	const headCells = [
		{
			id: "id",
			numeric: false,
			disablePadding: false,
			label: "Id",
		},
		{
			id: "name",
			numeric: false,
			disablePadding: false,
			label: "Name",
		},
		{
			id: "initials",
			numeric: false,
			disablePadding: false,
			label: "Initials",
		},
		{
			id: "isActive",
			numeric: false,
			disablePadding: false,
			label: "Is Active",
		},
		{
			id: "action",
			numeric: true,
			disablePadding: false,
			label: "Actions",
		},
	];

	const rows = [
		{
			id: 1,
			name: "Applied Physics and Applied Mathematics Department",
			initials: "APPMD",
			isActive: true,
			isWithAction: true
		},
		{
			id: 2,
			name: "Art History and Archaeology Department",
			initials: "AHAD",
			isActive: true,
			isWithAction: true
		},
		{
			id: 3,
			name: "Astronomy and Astrophysics Department",
			initials: "AAD",
			isActive: true,
			isWithAction: true
		},
	];

	return (
		<DepartmentSection>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<DepartmentFormContainer>
						<AddDepartmentRequestFormModal />
						<div>
							<CustomTextField
								id="outlined-basic"
								label="Search"
								variant="outlined"
							/>
							{/* <CustomDropdown
								id="searchBy"
								name="searchBy"
								label="Search By"
								placeholder="Select search by"
								menuItems={[
									{ value: "computerProblem", label: "Computer Problem" },
									{
										value: "networkProblem",
										label: "Network Problem",
									},
									{
										value: "problemTypeOthers",
										label: "Others",
									},
								]}
								fullWidth
								displayEmpty
								onChange={handleFormFieldChange}
								value={formFields.problemType.value}
								error={errors?.problemType ? true : false}
								helperText={errors?.problemType || ""}
							/> */}
							<CustomButton label={"Search"} isDefault={true} />
						</div>
					</DepartmentFormContainer>
				</Grid>
				<Grid item xs={12}>
					<CustomTable
						tableHeads={headCells}
						tableRows={rows}
						tableCells={tableCells}
					/>
				</Grid>
			</Grid>
		</DepartmentSection>
	);
};

export default Department;
