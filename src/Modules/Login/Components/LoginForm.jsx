import React, { useEffect, useState } from "react";
import { LoginFormContainer, LoginFormSection } from "./LoginForm.styled.jsx";
import CustomTextField from "../../Common/CustomTextField/CustomTextField.jsx";
import { Checkbox, FormControlLabel } from "@mui/material";
import CustomButton from "../../Common/CustomButton/CustomButton.jsx";
import {
	handleFieldChange,
	handleValidation,
} from "../../../helpers/form.helper.jsx";
import { useSigninMutation } from "../../../redux/api/auth.api.js";
import { setCurrentUser } from "../../../redux/slices/user.slice.js";
import { globalActionLoad } from "../../../redux/slices/global.slice.js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
	const [signin, signinResponse] = useSigninMutation();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [errors, setErrors] = useState({});
	const [formFields, setFormFields] = useState({
		email_address: {
			value: "mel1@gmail.com",
			label: "Email Address",
		},
		password: {
			value: "supersecret1",
			label: "Password",
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
		const hasErrors = handleValidation({
			fields: formFields,
		});
		setErrors(hasErrors);

		if (!Object.keys(hasErrors).length) {
			const { email_address, password } = formFields;
			console.log(123123);
			signin({ email_address: email_address.value, password: password.value });
		}
	};

	useEffect(() => {
		if (signinResponse.isSuccess) {
			const { data } = signinResponse;

			if (data) {
				const { error, message, result, status } = data;
				if (!error && status) {
					dispatch(
						globalActionLoad({
							message: "Your are successfully signed in.",
							code: 1,
						})
					);

					setTimeout(() => {
						dispatch(
							globalActionLoad({
								message: "Your are now redirecting . . .",
								code: 1,
							})
						);
						setTimeout(() => {
							dispatch(
								setCurrentUser({
									details: result.user_details,
									token: result.access_token,
								})
							);
							navigate("/");
						}, 1500);
					}, 1500);
				} else {
					globalActionLoad({
						message: message,
						code: 4,
					});
				}
			}
		}
	}, [signinResponse]);

	return (
		<LoginFormSection>
			<LoginFormContainer>
				<h1>Login</h1>
				<p>Welcome back, please login to your account</p>

				<div className="form">
					<CustomTextField
						id="email_address"
						name="email_address"
						label="Email Address"
						placeholder="Please enter your email address"
						variant="outlined"
						fullWidth
						helperText={errors?.email_address}
						error={errors?.email_address}
						value={formFields.email_address.value || ""}
						onChange={handleFormFieldChange}
					/>
					<CustomTextField
						id="password"
						name="password"
						label="Password"
						placeholder="Please enter your password"
						variant="outlined"
						type="password"
						fullWidth
						helperText={errors?.password}
						error={errors?.password}
						value={formFields.password.value || ""}
						onChange={handleFormFieldChange}
					/>
				</div>
				<div className="form-sub">
					<FormControlLabel
						control={<Checkbox checked={false} name="rememberMe" />}
						label="Remember Me"
					/>
					<p>Request Reset Password</p>
				</div>
				<div className="form-actions">
					<CustomButton
						label={"Login"}
						size="large"
						fullWidth
						onClick={handleSubmit}
					/>
				</div>
			</LoginFormContainer>
		</LoginFormSection>
	);
};

export default LoginForm;
