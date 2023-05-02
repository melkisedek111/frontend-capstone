import React, { useEffect, useState } from "react";
import CustomTextField from "../Common/CustomTextField/CustomTextField.jsx";
import {
	handleFieldChange,
	handleValidation,
} from "../../helpers/form.helper.jsx";
import { Grid } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import CustomButton from "../Common/CustomButton/CustomButton.jsx";
import { useCreateDepartmentMutation } from "../../redux/api/department.api.js";

const AddDepartmentRequestForm = () => {
	const [createDepartment, createDepartmentResponse] = useCreateDepartmentMutation();
	const [errors, setErrors] = useState({});
	const [formFields, setFormFields] = useState({
		name: {
			value: "",
			type: "letter|space|dot",
			label: "Department Name",
		},
		initials: {
			value: "",
			type: "letter|space|dot",
			label: "Department Name",
		},
		isActive: {
			value: 0,
			type: "letter|space|dot",
			label: "Department Status",
		},
	});

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

	/**
	 * DOCUMENT: This functions is used handle on change values for every field <br>
	 * Triggered: when inserting a value <br>
	 * Last Updated Date: February 19, 2023
	 * @function
	 * @memberOf AddDepartmentForm
	 * @param event - { event }
	 * @author Mel
	 */
	const handleSwitch = (event) => {
		const { name, checked } = event.target;
        setFormFields({...formFields, [name]: {...formFields[name], value: checked ? 1 : 0 }});
	};

	/**
	 * DOCUMENT: This function is used to submit a request <br>
	 * Triggered: when clicking the submit button <br>
	 * Last Updated Date: February 19, 2023
	 * @function
	 * @memberOf AddDepartmentForm
	 * @param event - { event }
	 * @author Mel
	 */
	const handleSubmit = () => {
		const hasErrors = handleValidation({ fields: formFields, excludeFields: ["isActive"] });
		setErrors(hasErrors);
		console.log("qweqweqwe")
		createDepartment({initials: "TEST", name: "Test"})
		console.log("123123")
	};

    useEffect(() => {
1
    }, [])

	return (
		<div>
			<Grid container spacing={2} marginTop={2}>
				<Grid item xs={12}>
					<CustomTextField
						id="name"
						name="name"
						label="Department Name"
						placeholder="Please enter your department name"
						variant="outlined"
						className="fields"
						fullWidth
						helperText={errors?.name}
						error={errors?.name}
						value={formFields.name.value || ""}
						onChange={handleFormFieldChange}
					/>
				</Grid>
				<Grid item xs={12}>
					<CustomTextField
						id="initials"
						name="initials"
						label="Department Initials"
						placeholder="Please enter your department initials"
						variant="outlined"
						className="fields"
						fullWidth
						helperText={errors?.initials}
						error={errors?.initials}
						value={formFields.initials.value || ""}
						onChange={handleFormFieldChange}
					/>
				</Grid>
				<Grid item xs={12}>
					<FormGroup>
						<FormControlLabel
							control={
								<Switch checked={formFields.isActive.value ? true : false} />
							}
							label={
								formFields.isActive.value ? "Status Active" : "Status Inactive"
							}
							onChange={handleSwitch}
							id="isActive"
							name="isActive"
						/>
					</FormGroup>
				</Grid>
				<Grid item xs={12}>
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
							//onClick={handleClose}
						/>
					</div>
				</Grid>
			</Grid>
		</div>
	);
};

export default AddDepartmentRequestForm;
