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
			id: "name",
			numeric: false,
			disablePadding: false,
			label: "Dessert (100g serving)",
		},
		{
			id: "calories",
			numeric: true,
			disablePadding: false,
			label: "Calories",
		},
		{
			id: "fat",
			numeric: true,
			disablePadding: false,
			label: "Fat (g)",
		},
		{
			id: "carbs",
			numeric: true,
			disablePadding: false,
			label: "Carbs (g)",
		},
		{
			id: "protein",
			numeric: true,
			disablePadding: false,
			label: "Protein (g)",
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
			name: "Cupcake",
			calories: 305,
			fat: 3.6,
			carbs: 76,
			protein: 43,
			isWithAction: true,
		},
		{
			name: "Donut",
			calories: 421,
			fat: 3.6,
			carbs: 44,
			protein: 43,
			isWithAction: true,
		},
		{
			name: "Eclair",
			calories: 212,
			fat: 3.6,
			carbs: 11,
			protein: 43,
			isWithAction: true,
		},
	];

	const tableCells = {
		name: (value) => (
			<TableCell component="th" id={value} scope="row">
				{value}
			</TableCell>
		),
		calories: (value) => (
			<TableCell component="th" id={value} scope="row" align="right">
				{value}
			</TableCell>
		),
		fat: (value) => (
			<TableCell component="th" id={value} scope="row" align="right">
				{value}
			</TableCell>
		),
		carbs: (value) => (
			<TableCell component="th" id={value} scope="row" align="right">
				{value}
			</TableCell>
		),
		protein: (value) => (
			<TableCell component="th" id={value} scope="row" align="right">
				{value}
			</TableCell>
		),
		isWithAction: (value) => (
			<TableCell component="th" id={value} scope="row" align="right">
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

	return (
		<DepartmentSection>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<DepartmentFormContainer>
						<CustomButton label={"Add Department"} isDefault={true} />
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
							<CustomButton label={"Add Department"} isDefault={true} />
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
