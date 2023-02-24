import { MenuItem, Select, TextField } from "@mui/material";
import React from "react";
import { CustomDropdownContainer } from "./customDropdown.styled.jsx";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";

const CustomDropdown = (props) => {
	const { menuItems, placeholder, isSelected, value, ...otherProps } = props;
	return (
		<CustomDropdownContainer>
			{/* <Select
				{...otherProps}
				IconComponent={ArrowDropDownRoundedIcon}

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
			</Select> */}
			<TextField {...otherProps} select value={value || 0}>
				{placeholder ? (
					<MenuItem value={0} disabled>
						{placeholder}
					</MenuItem>
				) : null}
				{menuItems.map((option) => (
					<MenuItem key={option.value} value={option.value}>
						{option.label}
					</MenuItem>
				))}
			</TextField>
		</CustomDropdownContainer>
	);
};

export default CustomDropdown;
