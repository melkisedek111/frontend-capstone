import React from "react";
import { HeaderTitle, RecentRequestInnerContainer } from "./recentRequest.styled.jsx";
import TodayIcon from "@mui/icons-material/Today";
import PortraitIcon from '@mui/icons-material/Portrait';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import PendingIcon from '@mui/icons-material/Pending';
import ApartmentIcon from '@mui/icons-material/Apartment';

const RecentRequest = ({request}) => {
    const { priorityLabel, requestSubject, requestCreated, requestedBy, department, process, status, priority } = request;
	return (
		<RecentRequestInnerContainer>
			<div className="header">
				<HeaderTitle priority={priority}>
					<p>{priorityLabel}</p>
				</HeaderTitle>
				<div className="header_details">
					<h5>{requestSubject}</h5>
				</div>
			</div>
			<div className="sub_details">
				<div>
					<TodayIcon />
					<span>Date Requested</span>
				</div>
				<p>{requestCreated}</p>
			</div>
			<div className="sub_details">
				<div>
					<PortraitIcon />
					<span>Request By</span>
				</div>
				<p>{requestedBy}</p>
			</div>
			<div className="sub_details">
				<div>
					<ApartmentIcon />
					<span>{department}</span>
				</div>
				<p>CICT</p>
			</div>
			<div className="sub_details">
				<div>
					<AccountTreeIcon />
					<span>Process To Be</span>
				</div>
				<p>{process}</p>
			</div>
			<div className="sub_details">
				<div>
					<PendingIcon />
					<span>Status</span>
				</div>
				<p>{status}</p>
			</div>
		</RecentRequestInnerContainer>
	);
};

export default RecentRequest;
