import React, { useEffect, useRef, useState } from "react";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
import {
	IconContainer,
	ItemListContainer,
	ItemNotification,
	NotificationIconContainer,
    NotificationIconSection,
} from "./notificationIcon.styled.jsx";
const NotificationIcon = ({ icon, label }) => {
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
		<NotificationIconSection>
			<NotificationIconContainer
				onClick={handleOpenNotification}
				className={`open-notification-${label}`}
			>
				{icon}
				<FiberManualRecordRoundedIcon />
			</NotificationIconContainer>
			{isOpenNotification ? (
				<ItemListContainer className={`notification-item-${label}`}>
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
		</NotificationIconSection>
	);
};

export default NotificationIcon;
