import React from "react";
import RecentRequest from "./RecentRequest.jsx";
import {
	RecentRequestCardContainer,
	RecentRequestCardHeader,
	RecentRequestLists,
} from "./recentRequestCard.styled.jsx";

const RecentRequestCard = () => {
	const recentRequest = [
		{
			priorityLabel: "HP",
			requestSubject: "My Computer keeps blue screen",
			requestCreated: "January 13, 2023 4:10 PM",
			requestedBy: "P. Garcia",
			department: "CICT",
			process: "Unit Approval",
			status: "On Process",
			priority: "highPriority",
		},
		{
			priorityLabel: "NP",
			requestSubject: "My PC don't have internet",
			requestCreated: "January 13, 2023 4:10 PM",
			requestedBy: "JK. Dela Cruz",
			department: "CAS",
			process: "Unit Approval",
			status: "On Process",
			priority: "normalPriority",
		},
	];
	return (
		<RecentRequestCardContainer>
			<RecentRequestCardHeader>
				<h5>Recent Requests</h5>
				<span>View More</span>
			</RecentRequestCardHeader>
			<RecentRequestLists>
				{recentRequest.map((request, index) => (
					<RecentRequest key={index} request={request} />
				))}
			</RecentRequestLists>
		</RecentRequestCardContainer>
	);
};

export default RecentRequestCard;
