import React, { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import {
	CustomDropdownContainer,
	CustomDropdownSection,
	DetailsContainer,
	DropdownDetailsContainer,
	DropdownLinks,
} from "./customDropdown.styled.jsx";
import ArrowDropDownTwoToneIcon from "@mui/icons-material/ArrowDropDownTwoTone";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
const CustomDropdown = () => {
	const [isOpenDropdown, setIsOpenDropdown] = useState(false);

	const handleOpenDropdown = () => {
		setIsOpenDropdown(!isOpenDropdown);
	};

	useEffect(() => {
		if (isOpenDropdown) {
			const handleDocumentClick = (event) => {
				if (
					!event.target.closest(".profile-dropdown") &&
					!event.target.parentNode.closest(".profile-dropdown-links")
				) {
					setIsOpenDropdown(false);
				}
			};
			document.addEventListener("click", handleDocumentClick);
			return () => {
				document.removeEventListener("click", handleDocumentClick);
			};
		}
	}, [isOpenDropdown]);
	return (
		<CustomDropdownSection>
			<CustomDropdownContainer
				onClick={handleOpenDropdown}
				className="profile-dropdown"
			>
				<Avatar sx={{ width: 30, height: 30 }} />
				<DetailsContainer>
					<p>Albus Dumbledore</p>
					<span>Super Admin</span>
				</DetailsContainer>
				<ArrowDropDownTwoToneIcon />
			</CustomDropdownContainer>
			{isOpenDropdown ? (
				<DropdownDetailsContainer className="profile-dropdown-links">
					<DropdownLinks>
						<p>Settings</p>
						<SettingsIcon />
					</DropdownLinks>
					<DropdownLinks>
						<p>Logout</p>
						<LogoutIcon />
					</DropdownLinks>
				</DropdownDetailsContainer>
			) : null}
		</CustomDropdownSection>
	);
};

export default CustomDropdown;
