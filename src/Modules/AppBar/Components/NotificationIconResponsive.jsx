import React, { useEffect, useState } from "react";
import {
	ItemListContainer,
	ItemNotification,
} from "./notificationIcon.styled.jsx";
import { NotificationIconResponsiveContainer } from "./notificationIconResponsive.styled.jsx";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";

const NotificationIconResponsive = ({ icon, label, notificationItems }) => {
	const [isOpenNotification, setIsOpenNotification] = useState(false);
	const handleOpenNotification = () => {
		setIsOpenNotification(!isOpenNotification);
	};

	useEffect(() => {
		if (isOpenNotification) {
			const handleDocumentClick = (event) => {
				if (
					!event.target.closest(`.open-notification-${label}`) &&
					!event.target.parentNode.closest(`.notification-item${label}`)
				) {
					setIsOpenNotification(false);
				}
			};
			document.addEventListener("click", handleDocumentClick);
			return () => {
				document.removeEventListener("click", handleDocumentClick);
			};
		}
	}, [isOpenNotification]);

	return (
		<NotificationIconResponsiveContainer
			onClick={handleOpenNotification}
			className={`open-notification-${label}`}
		>
			<div className="label_container">
				<div className="dot">
					{icon} <FiberManualRecordRoundedIcon />
				</div>{" "}
				<p>{label}</p>
			</div>
			{isOpenNotification ? (
				<ItemListContainer
					fullWidth={true}
					isResponsive={true}
					className={`notification-item-${label} notificationResponsive`}
				>
					<ItemNotification>
						<p>New Request has been received</p>
						<div>
							<span>2 days ago.</span>
							<span>read</span>
						</div>
					</ItemNotification>
					<ItemNotification>
						<p>New Request has been received</p>
						<div>
							<span>2 days ago.</span>
							<span>unread</span>
						</div>
					</ItemNotification>
					<ItemNotification>
						<p>New Request has been received</p>
						<div>
							<span>2 days ago.</span>
							<span>unread</span>
						</div>
					</ItemNotification>
					<ItemNotification>
						<p>New Request has been received</p>
						<div>
							<span>2 days ago.</span>
							<span>unread</span>
						</div>
					</ItemNotification>
					<ItemNotification>
						<p>New Request has been received</p>
						<div>
							<span>2 days ago.</span>
							<span>unread</span>
						</div>
					</ItemNotification>
					<ItemNotification>
						<p>New Request has been received</p>
						<div>
							<span>2 days ago.</span>
							<span>unread</span>
						</div>
					</ItemNotification>
					<ItemNotification>
						<p>New Request has been received</p>
						<div>
							<span>2 days ago.</span>
							<span>unread</span>
						</div>
					</ItemNotification>
					<ItemNotification>
						<p>New Request has been received</p>
						<div>
							<span>2 days ago.</span>
							<span>unread</span>
						</div>
					</ItemNotification>
				</ItemListContainer>
			) : null}
		</NotificationIconResponsiveContainer>
	);
};

export default NotificationIconResponsive;
