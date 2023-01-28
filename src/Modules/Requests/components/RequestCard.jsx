import { Stack, Step, StepLabel, Stepper, Typography } from "@mui/material";
import React from "react";
import { RequestCardContainer } from "./requestCard.styled.jsx";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";

import GroupAddIcon from "@mui/icons-material/GroupAdd";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import StepConnector, {
	stepConnectorClasses,
} from "@mui/material/StepConnector";
import CSS_CONSTANTS from "../../../utils/css.constants.js";
import CustomButton from "../../Common/CustomButton/CustomButton.jsx";
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
	[`&.${stepConnectorClasses.alternativeLabel}`]: {
		top: 20,
	},
	[`&.${stepConnectorClasses.active}`]: {
		[`& .${stepConnectorClasses.line}`]: {
			backgroundColor: CSS_CONSTANTS.STEPPER.secondary,
		},
	},
	[`&.${stepConnectorClasses.completed}`]: {
		[`& .${stepConnectorClasses.line}`]: {
			backgroundColor: CSS_CONSTANTS.STEPPER.secondary,
		},
	},
	[`& .${stepConnectorClasses.line}`]: {
		height: 2,
		border: 0,
		backgroundColor:
			theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
		borderRadius: 1,
	},
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
	backgroundColor:
		theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
	zIndex: 1,
	color: "#fff",
	width: 40,
	height: 40,
	display: "flex",
	borderRadius: "50%",
	justifyContent: "center",
	alignItems: "center",
	instructions: {
		marginTop: theme.spacing.unit,
		marginBottom: theme.spacing.unit,
	},
	iconContainer: {
		// define styles for icon container
		transform: "scale(2)",
	},
	...(ownerState.active && {
		backgroundColor: CSS_CONSTANTS.STEPPER.secondary,
		boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
	}),
	...(ownerState.completed && {
		backgroundColor: CSS_CONSTANTS.STEPPER.secondary,
	}),
}));

function ColorlibStepIcon(props) {
	const { active, completed, className } = props;

	const icons = {
		1: <AppRegistrationIcon />,
		2: <GroupAddIcon />,
		3: <MiscellaneousServicesIcon />,
		4: <AssignmentIndIcon />,
		5: <CheckCircleIcon />,
	};

	return (
		<ColorlibStepIconRoot
			ownerState={{ completed, active }}
			className={className}
		>
			{icons[String(props.icon)]}
		</ColorlibStepIconRoot>
	);
}

ColorlibStepIcon.propTypes = {
	/**
	 * Whether this step is active.
	 * @default false
	 */
	active: PropTypes.bool,
	className: PropTypes.string,
	/**
	 * Mark the step as completed. Is passed to child components.
	 * @default false
	 */
	completed: PropTypes.bool,
	/**
	 * The label displayed in the step icon.
	 */
	icon: PropTypes.node,
};
const RequestCard = () => {
	const steps = [
		"Request Details",
		"Units Approval",
		"Service Approval",
		"Service Assigned",
		"Complete",
	];
	return (
		<RequestCardContainer>
			<div className="sub_container">
				<div className="header">
					<h5>My PC don't have internet</h5>
					<p>2 minutes ago</p>
				</div>
			</div>
			<div className="label_container">
				<h4>Network Problem</h4>
				<div>
					<div>
						<span>Start DateTime</span>
						<p>10/10/2025</p>
					</div>
					<div>
						<span>End DateTime</span>
						<p>10/10/2025</p>
					</div>
				</div>
			</div>
			<div className="sub_container">
				<div className="details">
					<div className="main_info">
						<span>Request By</span>
						<p>John Dela Cruz (CAS)</p>
					</div>
					<div className="main_info">
						<span>Request ID No</span>
						<p>20230115-0001</p>
					</div>
					<div className="main_info">
						<span>Service Type</span>
						<p>Management Information System</p>
					</div>
					<div className="description">
						<span>Request Details/Description of Work</span>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Praesentium expedita assumenda maxime nihil corporis nam at iure.
							Mollitia doloremque, odit deserunt officiis asperiores ratione
							distinctio ipsa eos veniam voluptates ut.
						</p>
					</div>
				</div>
				<div className="request_process">
					<span>Request Process</span>
					<Stack sx={{ width: "100%", marginTop: ".5em" }} spacing={4}>
						<Stepper
							alternativeLabel
							activeStep={2}
							connector={<ColorlibConnector />}
							style={{ width: "100%" }}
						>
							{steps.map((label) => (
								<Step key={label}>
									<StepLabel StepIconComponent={ColorlibStepIcon}>
										<Typography variant="caption" style={{ fontSize: ".7em" }}>
											{label}
										</Typography>
									</StepLabel>
								</Step>
							))}
						</Stepper>
					</Stack>
				</div>
			</div>
			<div className="button_container">
				<CustomButton
					icon={<CheckCircleOutlineRoundedIcon />}
					label={"Approved"}
					size="small"
				/>
				<CustomButton
					icon={<CancelRoundedIcon />}
					label={"Reject"}
					size="small"
                    color="danger"
				/>
			</div>
		</RequestCardContainer>
	);
};

export default RequestCard;
