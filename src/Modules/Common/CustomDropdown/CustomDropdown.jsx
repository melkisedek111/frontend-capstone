import { MenuItem, Select } from "@mui/material";
import React from "react";
import { CustomDropdownContainer } from "./customDropdown.styled.jsx";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";

const CustomDropdown = (props) => {
	const { menuItems, placeholder, isSelected, ...otherProps } = props;
	console.log(menuItems)
	return (
		<CustomDropdownContainer>
			<Select
				{...otherProps}
				IconComponent={ArrowDropDownRoundedIcon}
				value={
					isSelected ? (menuItems?.length ? menuItems[0].value : null) : placeholder
				}	
				// style={{ borderRadius: "10px" }}
			>
				{isSelected ? null : (
					<MenuItem disabled value="">
						<em>{placeholder}</em>
					</MenuItem>
				)}
				{menuItems?.length
					? menuItems.map((item) => (
							<MenuItem value={item.value}>{item.label}</MenuItem>
					  ))
					: null}
			</Select>
		</CustomDropdownContainer>
	);
};

export default CustomDropdown;
