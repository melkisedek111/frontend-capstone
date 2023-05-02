import React, { useEffect, useState } from "react";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import {
	AppBarSection,
	IconContainer,
	LeftBarContainer,
	LeftBarMainContainer,
	LinkContainer,
	LinksContainer,
	NavigationListContainer,
	NavigationListContainerResponsive,
	PageComponentContainer,
	PageContainer,
	TitleContainer,
	TopBarContainer,
	TopBarMainContainer,
} from "./appBar.styled.jsx";
import DashboardTwoToneIcon from "@mui/icons-material/DashboardTwoTone";
import DisplaySettingsTwoToneIcon from "@mui/icons-material/DisplaySettingsTwoTone";
import HomeRepairServiceTwoToneIcon from "@mui/icons-material/HomeRepairServiceTwoTone";
import PeopleAltTwoToneIcon from "@mui/icons-material/PeopleAltTwoTone";
import AssignmentIndTwoToneIcon from "@mui/icons-material/AssignmentIndTwoTone";
import QrCodeTwoToneIcon from "@mui/icons-material/QrCodeTwoTone";
import QrCodeScannerTwoToneIcon from "@mui/icons-material/QrCodeScannerTwoTone";
import CustomButton from "../Common/CustomButton/CustomButton.jsx";
import CustomDropdown from "../Common/Dropdown/CustomDropdown.jsx";
import NotificationIcon from "./Components/NotificationIcon.jsx";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import Dashboard from "../Dashboard/Dashboard.jsx";
import GroupAddTwoToneIcon from "@mui/icons-material/GroupAddTwoTone";
import ApiIcon from "@mui/icons-material/Api";

import { Link, Outlet, useLocation } from "react-router-dom";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { Avatar } from "@mui/material";
import NotificationIconResponsive from "./Components/NotificationIconResponsive.jsx";
import { intSizes } from "../../utils/css.constants.js";
import { useSelector } from "react-redux";
import BusinessIcon from '@mui/icons-material/Business';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

const Links = [
	{
		path: "/",
		component: (
			<>
				<DashboardTwoToneIcon />
				<h5> Dashboard </h5>
			</>
		),
		title: "Dashboard",
		isActive: false
	},
	{
		path: "/requests",
		component: (
			<>
				<DisplaySettingsTwoToneIcon />
				<h5> Requests </h5>
			</>
		),
		title: "Requests",
		isActive: false
	},
	{
		path: "/services",
		component: (
			<>
				<HomeRepairServiceTwoToneIcon />
				<h5> Services </h5>
			</>
		),
		title: "Services",
		isActive: false
	},
	{
		path: "/designations",
		component: (
			<>
				<AssignmentIndTwoToneIcon />
				<h5> Designations </h5>
			</>
		),
		title: "Designations",
		isActive: false
	},
	{
		path: "/users",
		component: (
			<>
				<PeopleAltTwoToneIcon />
				<h5> Users </h5>
			</>
		),
		title: "Users",
		isActive: false
	},
	{
		path: "/qr-items",
		component: (
			<>
				<QrCodeTwoToneIcon />
				<h5> QR Items </h5>
			</>
		),
		title: "Items",
		isActive: false
	},
	{
		path: "/qrcode",
		component: (
			<>
				<QrCodeScannerTwoToneIcon />
				<h5> Scan QR </h5>
			</>
		),
		title: "QRC Code",
		isActive: false
	},
	{
		path: "/departments",
		component: (
			<>
				<BusinessIcon />
				<h5> Department </h5>
			</>
		),
		title: "Department",
		isActive: false
	},
	{
		path: "/positions",
		component: (
			<>
				<PersonSearchIcon />
				<h5> Position </h5>
			</>
		),
		title: "Position",
		isActive: false
	},
];

const AppBar = () => {
	const AppBarState = useSelector((state) => state.appBar);
	const history = useLocation();

	const [currentPageTitle, setCurrentPageTitle] = useState("Dashboard");

	const [isOpenSidebar, setIsOpenSidebar] = useState(false);
	const [isWidthLaptopAndMobileSize, setIsWidthLaptopAndMobileSize] =
		useState(false);
	const [selectedWidth, setSelectedWidth] = useState(1920);
	const [isOpenMenuBar, setIsOpenMenuBar] = useState(false);

	const handleOpenSidebar = () => {
		setIsOpenSidebar(!isOpenSidebar);
	};

	useEffect(() => {
		// document.addEventListener("click", handleCloseNavVisible);
		const width = window.innerWidth;
		width <= intSizes.mobileM || width <= intSizes.tablet
		if(width <= intSizes.mobileM || width <= intSizes.tablet){
			setIsWidthLaptopAndMobileSize(true);
			// setIsOpenSidebar(!isOpenSidebar);
		}
		else {
			setIsWidthLaptopAndMobileSize(false);
		}

		setSelectedWidth(width);
		return () => {
			// document.addEventListener("click", handleCloseNavVisible);
		};
	}, [selectedWidth, isWidthLaptopAndMobileSize]);

	const handleOpenMenuBar = () => {
		setIsOpenMenuBar(!isOpenMenuBar);
	};

	useEffect(() => {
		if (isOpenMenuBar) {
			const handleDocumentClick = (event) => {
				if (
					!event.target.closest(".menu-bar") &&
					!event.target.closest(".link_responsive_container")
				) {
					setIsOpenMenuBar(false);
				}
			};
			document.addEventListener("click", handleDocumentClick);
			return () => {
				document.removeEventListener("click", handleDocumentClick);
			};
		}
	}, [isOpenMenuBar]);

	return (
		<AppBarSection isOpenSidebar={isOpenSidebar}>
			<LeftBarMainContainer className={isOpenSidebar ? "show" : ""}>
				<LeftBarContainer>
					{/* Logo here */}
					<IconContainer>
						<ApiIcon />
						<h5>Issue Ticket Request Tracker</h5>
					</IconContainer>
					<LinksContainer>
						{Links.map((link, index) => (
							<Link key={index} to={link.path} style={{ textDecoration: "none" }}>
								<LinkContainer isSelected={link.title.includes(AppBarState.currentPage)}>
									{link.component}

								</LinkContainer>
							</Link>
						))}
					</LinksContainer>
				</LeftBarContainer>
			</LeftBarMainContainer>
			<PageContainer>
				<TopBarMainContainer>
					<TopBarContainer>
						<TitleContainer>
							<KeyboardArrowRightRoundedIcon onClick={handleOpenSidebar} />
							<h5>{AppBarState.currentPage || "Dashboard"}</h5>
						</TitleContainer>
						{isWidthLaptopAndMobileSize ? (
							<>
								<MenuIcon
									onClick={handleOpenMenuBar}
									className="menu-bar"
									style={{ cursor: "pointer" }}
								/>
								{isOpenMenuBar ? (
									<NavigationListContainerResponsive className="link_responsive_container">
										<div className="profile">
											<Avatar />
											<div>
												<p>Albus Dumbledore</p>
												<span>Super Admin</span>
											</div>
										</div>
										<NotificationIconResponsive
											icon={<MailRoundedIcon />}
											label="Messages"
										/>
										<NotificationIconResponsive
											icon={<NotificationsActiveRoundedIcon />}
											label="Requests"
										/>
										<NotificationIconResponsive
											icon={<SettingsIcon />}
											label="Settings"
										/>
										<NotificationIconResponsive
											icon={<LogoutIcon />}
											label="Logout"
										/>
									</NavigationListContainerResponsive>
								) : null}
							</>
						) : (
							<NavigationListContainer>
								{/* <CustomButton
								icon={<GroupAddTwoToneIcon />}
								label={"Add New User"}
							/> */}
								<NotificationIcon icon={<MailRoundedIcon />} label="message" />
								<NotificationIcon
									icon={<NotificationsActiveRoundedIcon />}
									label="request"
								/>
								<CustomDropdown />
							</NavigationListContainer>
						)}
					</TopBarContainer>
				</TopBarMainContainer>
				<PageComponentContainer>
					<Outlet />
				</PageComponentContainer>
			</PageContainer>
		</AppBarSection>
	);
};

export default AppBar;
