import styled from "styled-components";
import CSS_CONSTANTS from "../../utils/css.constants";

export const RequestsSection = styled.section``;

export const RequestsContainer = styled.div``;

export const RequestsHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	gap: 20px;

	@media ${CSS_CONSTANTS.DEVICES.mobileM} {
	}

	@media ${CSS_CONSTANTS.DEVICES.tablet} {
		justify-content: center;
	}

	@media ${CSS_CONSTANTS.DEVICES.laptopM} {
		justify-content: space-between;
	}

	@media ${CSS_CONSTANTS.DEVICES.desktopM} {
		justify-content: space-between;
	}
`;

export const RequestSubHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 15px;
	flex-wrap: wrap;
	margin: 5px;
`;

export const RequestCards = styled.div`
	margin-top: 20px;
	display: flex;
	flex-wrap: wrap;
	flex-grow: 1;
	gap: 50px;

	@media ${CSS_CONSTANTS.DEVICES.mobileM} {
		justify-content: center;
	}


`;
