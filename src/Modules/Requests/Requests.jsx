import React, { useEffect, useState } from "react";
import {
	RequestCards,
	RequestsContainer,
	RequestsHeader,
	RequestsSection,
	RequestSubHeader,
} from "./requests.styled.jsx";
import CustomTextField from "../Common/CustomTextField/CustomTextField.jsx";
import SearchIcon from "@mui/icons-material/Search";
import CustomDropdown from "../Common/CustomDropdown/CustomDropdown.jsx";
import RequestCard from "./components/requestCard.jsx";
import CustomPagination from "../Common/CustomPagination/CustomPagination.jsx";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../redux/slices/appBar.slice.js";

import AddRequestFormModal from "./components/AddRequestFormModal.jsx";

const Requests = () => {
	const dispatch = useDispatch();

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


			
	useEffect(() => {
		dispatch(setCurrentPage({pageTitle: "Requests"}));
		
    }, []);

	return (
		<RequestsSection>
			<RequestsContainer>
				<RequestsHeader>
					<AddRequestFormModal />
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
				<CustomPagination />
			</RequestsContainer>
		</RequestsSection>
	);
};

export default Requests;
