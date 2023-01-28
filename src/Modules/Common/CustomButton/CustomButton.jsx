import React from "react";
import { CustomButtonContainer } from "./customButton.styled.jsx";
import GroupAddTwoToneIcon from "@mui/icons-material/GroupAddTwoTone";
const CustomButton = ({icon, label, isDefault, color}) => {


	return (
		<CustomButtonContainer isDefault={isDefault} color={color}>
			{icon} {label}
		</CustomButtonContainer>
	);
};

export default CustomButton;
