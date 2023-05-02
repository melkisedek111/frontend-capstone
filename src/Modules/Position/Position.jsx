import React, { useEffect } from "react";
import { PositionContainer, PositionFormContainer, PositionSection } from "./position.styled.jsx";
import AddDepartmentRequestFormModal from "../Department/AddDepartmentRequestFormModal.jsx";
import { useDispatch } from "react-redux";
import { Box, Grid, IconButton, TableCell } from "@mui/material";
import CustomTextField from "../Common/CustomTextField/CustomTextField.jsx";
import CustomButton from "../Common/CustomButton/CustomButton.jsx";
import CustomTable from "../Common/CustomTable/CustomTable.jsx";
import { setCurrentPage } from "../../redux/slices/appBar.slice.js";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddPositionRequestFormModal from "./AddPositionRequestFormModal.jsx";
const tableCells = {
	id: (value) => (
		<TableCell style={{textAlign: "center"}} id={value} scope="row">
			{value}
		</TableCell>
	),
	position: (value) => (
		<TableCell style={{textAlign: "center"}} id={value} scope="row" >
			{value}
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

const headCells = [
    {
        id: "id",
        numeric: false,
        disablePadding: false,
        label: "Id",
    },
    {
        id: "position",
        numeric: false,
        disablePadding: false,
        label: "Position",
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
        position: "ADMINISTRATIVE AIDE I",
        isWithAction: true
    },
    {
        id: 2,
        position: "INSTRUCTOR III",
        isWithAction: true
    },
    {
        id: 3,
        position: "PROFESSOR I",
        isWithAction: true
    },
];

const Position = () => {
    const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setCurrentPage({ pageTitle: "Position" }));
	}, []);
	return (
		<PositionSection>
			<PositionContainer>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<PositionFormContainer>
							<AddPositionRequestFormModal />
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
						</PositionFormContainer>
					</Grid>
					<Grid item xs={12}>
						<CustomTable
							tableHeads={headCells}
							tableRows={rows}
							tableCells={tableCells}
						/>
					</Grid>
				</Grid>
			</PositionContainer>
		</PositionSection>
	);
};

export default Position;
