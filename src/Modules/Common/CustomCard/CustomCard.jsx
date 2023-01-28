import React from "react";
import {
	BackgroundCardIcon,
	CardDetails,
	CustomCardContainer,
	CustomCardSection,
} from "./customCard.styled.jsx";
const CustomCard = ({icon, total, percentage, label}) => {
	return (
		<CustomCardSection>
			<CustomCardContainer>
				<BackgroundCardIcon>
					{icon}
				</BackgroundCardIcon>
				<CardDetails>
					{icon}
					<div>
						<h5>{total}</h5>
						<h6>{percentage}</h6>
					</div>
                    <h5>{label}</h5>
				</CardDetails>
			</CustomCardContainer>
		</CustomCardSection>
	);
};

export default CustomCard;
