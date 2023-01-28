import React from "react";
import { InputAdornment, TextField } from "@mui/material";
import { CustomTextFieldContainer } from "./customTextField.styled.jsx";

const CustomTextField = (props) => {
	const { icon, ...otherProps } = props;

	if (icon) {
		return (
			<CustomTextFieldContainer>
				<TextField
					style={{ borderRadius: "30px !important" }}
					{...otherProps}
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">{icon}</InputAdornment>
						),
					}}
				/>
			</CustomTextFieldContainer>
		);
	}

	return <TextField {...otherProps} />;
};

export default CustomTextField;
