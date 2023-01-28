import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CustomButton from "../Common/CustomButton/CustomButton.jsx";
import {
	RequestCards,
	RequestsContainer,
	RequestsHeader,
	RequestsSection,
	RequestSubHeader,
} from "./requests.styled.jsx";
import CustomTextField from "../Common/CustomTextField/CustomTextField.jsx";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Button, ButtonGroup, InputAdornment } from "@mui/material";
import CustomDropdown from "../Common/CustomDropdown/CustomDropdown.jsx";
import RequestCard from "./components/requestCard.jsx";
const Requests = () => {
	const [viewTypes, setViewTypes] = useState([
		{
			label: "Pending",
			value: 1,
			selected: true,
			color: "primary",
		},
		{
			label: "Approved",
			value: 2,
			selected: false,
			color: "secondary",
		},
		{
			label: "Rejected",
			value: 3,
			selected: false,
			color: "warning",
		},
	]);

	const handleToggleViewTypes = (selectedValue) => {
		const allViewTypes = [...viewTypes];

		allViewTypes.map((type) => {
			if (type.value === selectedValue) {
				type.selected = true;
			} else {
				type.selected = false;
			}

			return type;
		});

		setViewTypes(allViewTypes);
	};

	return (
		<RequestsSection>
			<RequestsContainer>
				<RequestsHeader>
					<CustomButton icon={<AddCircleIcon />} label="Add New Request" />
					<RequestSubHeader>
						<CustomTextField icon={<SearchIcon />} placeholder="Search" />
						<CustomDropdown
							isSelected={true}
							size="large"
							menuItems={viewTypes}
						/>
					</RequestSubHeader>
				</RequestsHeader>
				<RequestCards>
					<RequestCard />
					<RequestCard />
					<RequestCard />
					<RequestCard />
				</RequestCards>
			</RequestsContainer>
		</RequestsSection>
	);
};

export default Requests;
