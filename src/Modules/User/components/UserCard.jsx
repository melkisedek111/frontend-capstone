import React from "react";
import {
	Avatar,
	Card,
	CardContent,
	Chip,
	FormControlLabel,
	Grid,
	Switch,
	Typography,
} from "@mui/material";
import { UserCardContainer } from "./userCard.styled.jsx";
import GppGoodIcon from "@mui/icons-material/GppGood";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
import WorkIcon from "@mui/icons-material/Work";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { styled } from "@mui/material/styles";
import CustomButton from "../../Common/CustomButton/CustomButton.jsx";
import BadgeIcon from '@mui/icons-material/Badge';

const IOSSwitch = styled((props) => (
	<Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
	width: 42,
	height: 26,
	padding: 0,
	"& .MuiSwitch-switchBase": {
		padding: 0,
		margin: 2,
		transitionDuration: "300ms",
		"&.Mui-checked": {
			transform: "translateX(16px)",
			color: "#fff",
			"& + .MuiSwitch-track": {
				backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
				opacity: 1,
				border: 0,
			},
			"&.Mui-disabled + .MuiSwitch-track": {
				opacity: 0.5,
			},
		},
		"&.Mui-focusVisible .MuiSwitch-thumb": {
			color: "#33cf4d",
			border: "6px solid #fff",
		},
		"&.Mui-disabled .MuiSwitch-thumb": {
			color:
				theme.palette.mode === "light"
					? theme.palette.grey[100]
					: theme.palette.grey[600],
		},
		"&.Mui-disabled + .MuiSwitch-track": {
			opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
		},
	},
	"& .MuiSwitch-thumb": {
		boxSizing: "border-box",
		width: 22,
		height: 22,
	},
	"& .MuiSwitch-track": {
		borderRadius: 26 / 2,
		backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
		opacity: 1,
		transition: theme.transitions.create(["background-color"], {
			duration: 500,
		}),
	},
}));

const UserCard = () => {
	return (
		<UserCardContainer>
			<Card>
				<CardContent>
					<Grid container spacing={1}>
						<Grid item xs={12}>
							<div className="userCard_header">
								<div>
									<Avatar sx={{ width: 45, height: 45 }}/>
									<div>
										<h5>Remytot</h5>
										<p>Account since January 2, 2022</p>
									</div>
								</div>
								<Chip icon={<GppGoodIcon />} label="HS3211" />
							</div>
						</Grid>
						<Grid item xs={12}>
							<div className="userCard_details">
								<div>
									<ContactEmergencyIcon />
									<h5>Full Name</h5>
								</div>
								<h5>Remy G. Sharp</h5>
							</div>
						</Grid>
						<Grid item xs={12}>
							<div className="userCard_details">
								<div>
									<BadgeIcon />
									<h5>Employee ID</h5>
								</div>
								<h5>2022-10021</h5>
							</div>
						</Grid>
						<Grid item xs={12}>
							<div className="userCard_details">
								<div>
									<WorkIcon />
									<h5>Position</h5>
								</div>
								<h5>Administrative Aide I</h5>
							</div>
						</Grid>
						<Grid item xs={12}>
							<div className="userCard_details">
								<div>
									<AccountBalanceIcon />
									<h5>Department</h5>
								</div>
								<h5>CICT</h5>
							</div>
						</Grid>
						<Grid item xs={12}>
							<div className="userCard_details">
								<div>
									<ContactPhoneIcon />
									<h5>Contact</h5>
								</div>
								<h5>+69305431343</h5>
							</div>
						</Grid>
						<Grid item xs={12}>
							<div className="userCard_details">
								<div>
									<ContactMailIcon />
									<h5>Email</h5>
								</div>
								<h5>remysharp1999@gmail.com</h5>
							</div>
						</Grid>
						<Grid item xs={12}>
							<div className="userCard_details">
								<div>
									<AdminPanelSettingsIcon />
									<h5>User Type</h5>
								</div>
								<Chip label="Regular" color="primary" />
							</div>
						</Grid>
						<Grid item xs={12}>
							<div className="userCard_action">
								<div>
									<h5>23</h5>
									<p>Total Request</p>
								</div>
								<div>
									<FormControlLabel
										control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
										label="Inactive"
									/>
								</div>
								<div>
									<CustomButton label="Edit" fullHeight={false} />
								</div>
							</div>
						</Grid>
					</Grid>
				</CardContent>
			</Card>
		</UserCardContainer>
	);
};

export default UserCard;
