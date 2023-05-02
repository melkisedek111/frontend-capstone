import React from "react";
import { InputAdornment, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

import { CustomTextFieldContainer } from "./customTextField.styled.jsx";
import CSS_CONSTANTS from "../../../utils/css.constants.js";
const CssTextField = styled(TextField)({
	"& label.Mui-focused": {
		color: `${CSS_CONSTANTS.COLORPALLETS.primary}`,
	},
	"& .MuiInput-underline:after": {
		borderBottomColor: `${CSS_CONSTANTS.COLORPALLETS.primary}`,
	},
	"& .MuiOutlinedInput-root": {
		"& fieldset": {
			borderColor: `${CSS_CONSTANTS.COLORPALLETS.primary}`,
		},
		// "&:hover fieldset": {
		// 	borderColor: "yellow",
		// },
		"&.Mui-focused fieldset": {
			borderColor: `${CSS_CONSTANTS.COLORPALLETS.primary}`,
		},
	},
});
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

	return <CustomTextFieldContainer>
		<CssTextField {...otherProps} />
	</CustomTextFieldContainer>
};

export default CustomTextField;
