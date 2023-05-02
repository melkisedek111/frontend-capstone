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

const AddPositionForm = () => {
	const [errors, setErrors] = useState({});
	const [formFields, setFormFields] = useState({
		position: {
			value: "",
			type: "letter|space|dot",
			label: "Department Name",
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
	};

    useEffect(() => {

    }, [])

	return (
		<div>
			<Grid container spacing={2} marginTop={2}>
				<Grid item xs={12}>
					<CustomTextField
						id="position"
						name="position"
						label="Department Position"
						placeholder="Please enter your department position"
						variant="outlined"
						className="fields"
						fullWidth
						helperText={errors?.position}
						error={errors?.position}
						value={formFields.position.value || ""}
						onChange={handleFormFieldChange}
					/>
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

export default AddPositionForm;
