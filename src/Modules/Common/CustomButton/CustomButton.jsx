import React from "react";
import { CustomButtonContainer } from "./customButton.styled.jsx";
import GroupAddTwoToneIcon from "@mui/icons-material/GroupAddTwoTone";
const CustomButton = ({icon, label, isDefault, color, ...otherProps}) => {

	return (
		<CustomButtonContainer isDefault={isDefault} color={color} {...otherProps}>
			{icon} {label}
		</CustomButtonContainer>
		
	);
};

export default CustomButton;
