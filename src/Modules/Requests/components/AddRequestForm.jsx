import React from "react";
import CustomButton from "../../Common/CustomButton/CustomButton.jsx";
import CustomTextField from "../../Common/CustomTextField/CustomTextField.jsx";
import CustomDropdown from "../../Common/CustomDropdown/CustomDropdown.jsx";
import {
	Checkbox,
	FormControl,
	FormControlLabel,
	FormGroup,
	FormLabel,
	Grid,
} from "@mui/material";
import { useState } from "react";
import {
	handleFieldChange,
	handleValidation,
} from "../../../helpers/form.helper.jsx";

const AddRequestForm = ({ handleClose }) => {
	const [errors, setErrors] = useState({});
	const [buildingAndGroundOtherServices, setBuildingAndGroundOtherServices] =
		useState(false);
	const [buildingAndGroundServices, setBuildingAndGroundServices] = useState([
		{
			label: "Carpentry/Masonry",
			value: 1,
			isChecked: false,
		},
		{
			label: "Grounds Maintenance",
			value: 2,
			isChecked: false,
		},
		{
			label: "Plumbing",
			value: 3,
			isChecked: false,
		},
		{
			label: "Mechanical Works",
			value: 4,
			isChecked: false,
		},
		{
			label: "Planting",
			value: 5,
			isChecked: false,
		},
		{
			label: "Electrical",
			value: 6,
			isChecked: false,
		},
		{
			label: "Hauling",
			value: 7,
			isChecked: false,
		},
		{
			label: "Wielding",
			value: 8,
			isChecked: false,
		},
		{
			label: "Others",
			value: 9,
			isChecked: false,
		},
	]);
	const [formFields, setFormFields] = useState({
		selectedService: {
			value: "",
			type: "letter|space|dot",
			label: "Selected Service",
		},
		problemType: {
			value: "",
			type: "letter|space|dot",
			label: "Problem Type",
		},
		problemTypeOthers: {
			value: "",
			type: "letter|space|dot",
			label: "Problem Type Others",
		},
		problemDescription: {
			value: "",
			type: "letter|space|dot",
			label: "Problem Description",
		},
		buildingAndGroundOtherServices: {
			value: "",
			type: "letter|space|dot",
			label: "Other Services",
		},
		serviceDescriptionOfWork: {
			value: "",
			type: "letter|space|dot",
			label: "Other Services",
		},
		priorityType: {
			value: "",
			type: "letter|space|dot",
			label: "Priority Type",
		},
	});

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
		handleFieldChange(event, formFields, setFormFields);
	};

	/**
	 * DOCUMENT: This functions is used handle the multiple selection for build and ground services <br>
	 * Triggered: when clicking the checkboxes <br>
	 * Last Updated Date: February 19, 2023
	 * @function
	 * @memberOf AddRequestForm
	 * @param event - { event }
	 * @author Mel
	 */
	const handleChangeServiceRequested = (event) => {
		let services = [...buildingAndGroundServices];
		services = services.map((item) => {
			if (event.target.name === "Others") {
				return {
					...item,
					isChecked: item.label === "Others" ? !item.isChecked : false,
				};
			} else {
				if (item.label === "Others") {
					item.isChecked = false;
				}

				if (event.target.name === item.label && item.label !== "Others") {
					item.isChecked = !item.isChecked;
				}

				return { ...item };
			}
		});
		const isOthersIsChecked = services.find((item) => item.label === "Others");
		setBuildingAndGroundOtherServices(isOthersIsChecked.isChecked);
		setBuildingAndGroundServices(services);
	};

	/**
	 * DOCUMENT: This function is used to submit a request <br>
	 * Triggered: when clicking the submit button <br>
	 * Last Updated Date: February 19, 2023
	 * @function
	 * @memberOf AddRequestForm
	 * @param event - { event }
	 * @author Mel
	 */
	const handleSubmit = () => {
		const hasErrors = handleValidation({ fields: formFields });
		setErrors(hasErrors);

		if (formFields.selectedService.value === "misServices") {
		}
		if (formFields.selectedService.value === "buildingAndGroundServices") {
		}

		if (Object.keys(hasErrors).length === 0) {
		}
	};

	/**
	 * DOCUMENT: This functions is used handle the selecting the services that will remove errors when have value <br>
	 * Triggered: when selecting a services <br>
	 * Last Updated Date: February 19, 2023
	 * @function
	 * @memberOf AddRequestForm
	 * @param event - { event }
	 * @author Mel
	 */
	const handleSelectService = (event) => {
		setErrors({});
		handleFieldChange(event, formFields, setFormFields);
	};

	return (
		<div>
			<Grid container spacing={2} marginTop={2}>
				<Grid item xs={12}>
					<CustomDropdown
						id="selectedService"
						name="selectedService"
						label="Service"
						placeholder="Select Service"
						menuItems={[
							{ value: "misServices", label: "MIS Services" },
							{
								value: "buildingAndGroundServices",
								label: "Building and Ground Services",
							},
						]}
						fullWidth
						displayEmpty
						onChange={handleSelectService}
						value={formFields.selectedService.value}
						error={errors?.selectedService ? true : false}
						helperText={errors?.selectedService || ""}
					/>
				</Grid>
				{formFields.selectedService.value === "misServices" ? (
					<>
						<Grid item xs={12}>
							<CustomDropdown
								id="problemType"
								name="problemType"
								label="Problem Type"
								placeholder="Select Problem Type"
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
							/>
						</Grid>
						{formFields.problemType.value === "problemTypeOthers" ? (
							<Grid item xs={12}>
								<CustomTextField
									id="problemTypeOthers"
									name="problemTypeOthers"
									label="Other Problem Type"
									placeholder="Please enter your problem type"
									variant="outlined"
									className="fields"
									fullWidth
									helperText={errors?.problemTypeOthers}
									error={errors?.problemTypeOthers}
									value={formFields.problemTypeOthers.value || ""}
									onChange={handleFormFieldChange}
								/>
							</Grid>
						) : null}

						<Grid item xs={12}>
							<CustomTextField
								id="problemDescription"
								name="problemDescription"
								label="Detailed Problem Description"
								placeholder="Please enter your problem description"
								multiline
								variant="outlined"
								className="fields"
								rows={5}
								fullWidth
								helperText={errors?.problemDescription}
								error={errors?.problemDescription}
								value={formFields.problemDescription.value || ""}
								onChange={handleFormFieldChange}
							/>
						</Grid>
					</>
				) : null}
				{formFields.selectedService.value === "buildingAndGroundServices" ? (
					<>
						<Grid item xs={12}>
							<FormControl component="fieldset">
								<FormLabel component="legend">
									Select Service Being Requested
								</FormLabel>
								<FormGroup
									style={{
										display: "grid",
										gridTemplateColumns: "repeat(2, 1fr)",
									}}
								>
									{buildingAndGroundServices.map((service) => (
										<FormControlLabel
											control={
												<Checkbox
													checked={service.isChecked}
													name={service.label}
													value={service.value}
													onChange={handleChangeServiceRequested}
												/>
											}
											label={service.label}
										/>
									))}
								</FormGroup>
							</FormControl>
						</Grid>
						{buildingAndGroundOtherServices ? (
							<Grid item xs={12}>
								<CustomTextField
									id="buildingAndGroundOtherServices"
									name="buildingAndGroundOtherServices"
									label="Other Services"
									placeholder="Please enter other services."
									variant="outlined"
									className="fields"
									fullWidth
									helperText={errors?.buildingAndGroundOtherServices}
									error={errors?.buildingAndGroundOtherServices}
									value={formFields.buildingAndGroundOtherServices.value || ""}
									onChange={handleFormFieldChange}
								/>
							</Grid>
						) : null}
						<Grid item xs={12}>
							<CustomTextField
								id="serviceDescriptionOfWork"
								name="serviceDescriptionOfWork"
								label="Service Description"
								placeholder="Description of work to be perform."
								multiline
								variant="outlined"
								className="fields"
								rows={5}
								fullWidth
								helperText={
									errors.serviceDescriptionOfWork ||
									"Please enter your description of work"
								}
								error={errors?.serviceDescriptionOfWork}
								value={formFields.serviceDescriptionOfWork.value || ""}
								onChange={handleFormFieldChange}
							/>
						</Grid>
					</>
				) : null}
				<Grid item xs={12}>
					<CustomDropdown
						id="priorityType"
						name="priorityType"
						label="Service"
						placeholder="Select Priority Type"
						menuItems={[
							{ value: "immediate", label: "Immediately" },
							{
								value: "later",
								label: "Later",
							},
						]}
						fullWidth
						displayEmpty
						onChange={handleSelectService}
						value={formFields.priorityType.value}
						error={errors?.priorityType ? true : false}
						helperText={errors?.priorityType || ""}
					/>
				</Grid>
				<Grid item sm={12}>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "5px",
							justifyContent: "space-between",
						}}
					>
						<CustomButton
							label={"Submit"}
							size="small"
							onClick={handleSubmit}
						/>
						<CustomButton
							label={"Cancel"}
							size="small"
							color="danger"
							onClick={handleClose}
						/>
					</div>
				</Grid>
			</Grid>
		</div>
	);
};

export default AddRequestForm;
