import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../redux/slices/appBar.slice";
import {
	QRItemsContainer,
	QRItemsFormContainer,
	QRItemsSection,
} from "./QRItems.styled.jsx";
import { Grid } from "@mui/material";
import CustomCollapsibleTable from "../Common/CustomCollapsibleTable/CustomCollapsibleTable.jsx";
import CustomTextField from "../Common/CustomTextField/CustomTextField.jsx";
import CustomButton from "../Common/CustomButton/CustomButton.jsx";
import AddQRItemsFormModal from "./AddQRItemsFormModal.jsx";

const QRItems = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setCurrentPage({ pageTitle: "QR Items" }));
	}, []);

	return (
		<QRItemsSection>
			<QRItemsContainer>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<QRItemsFormContainer>
                            <AddQRItemsFormModal />
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
						</QRItemsFormContainer>
					</Grid>
					<Grid item xs={12}>
						<CustomCollapsibleTable />
					</Grid>
				</Grid>
			</QRItemsContainer>
		</QRItemsSection>
	);
};

export default QRItems;
