import styled from "styled-components";
import CSS_CONSTANTS from "../../utils/css.constants";

export const DashboardSection = styled.section`
	/* min-height: 78vh; */
`;

export const DashboardContainer = styled.div`
	/* display: grid;
	grid-template-columns: 1fr .4fr; */
	
	/* display: flex;
	flex-wrap: wrap;
	flex-grow: 1;
	width: inherit;
	gap: 20px; */
`;

export const LeftSection = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 10px;
	flex: 0.7;

	@media ${CSS_CONSTANTS.DEVICES.mobileM} {
		flex: 1;
	}

	@media ${CSS_CONSTANTS.DEVICES.tablet} {
		flex: 0.7;
	}

	@media ${CSS_CONSTANTS.DEVICES.laptopM} {
		flex: 0.7;
	}

	@media ${CSS_CONSTANTS.DEVICES.desktopM} {
		flex: 0.7;
	}
`;

export const LeftUpperSection = styled.div`
	/* display: grid;
	grid-template-columns: 1fr 1fr; */
	display: flex;
	flex-grow: 1;
	flex-wrap: wrap;
	gap: 10px;

	@media ${CSS_CONSTANTS.DEVICES.mobileM} {
		display: flex;
		flex-grow: 1;
		flex-wrap: wrap;
	}

	@media ${CSS_CONSTANTS.DEVICES.tablet} {
		display: grid;
		grid-template-columns: 1fr;
	}

	@media ${CSS_CONSTANTS.DEVICES.laptopM} {
		display: flex;
		flex-grow: 1;
		flex-wrap: wrap;
	}

	@media ${CSS_CONSTANTS.DEVICES.desktopM} {
		display: flex;
		flex-grow: 1;
		flex-wrap: wrap;
	}
`;

export const CardsContainer = styled.div`
	display: flex;
	flex: 0.5;
	flex-wrap: wrap;
	/* gap: 15px; */
	justify-content: space-between;

	@media ${CSS_CONSTANTS.DEVICES.mobileM} {
		justify-content: center;
		flex: 1;
	}

	@media ${CSS_CONSTANTS.DEVICES.tablet} {
		justify-content: space-around;
		flex: 1;
	}

	@media ${CSS_CONSTANTS.DEVICES.laptopM} {
		justify-content: space-between;
		flex: 0.5;
	}

	@media ${CSS_CONSTANTS.DEVICES.desktopM} {
		justify-content: space-between;
		flex: 0.5;
	}
`;

export const GraphContainer = styled.div`
	flex: 0.5;

	@media ${CSS_CONSTANTS.DEVICES.mobileM} {
		flex: 1;
	}

	@media ${CSS_CONSTANTS.DEVICES.tablet} {
		flex: 1;
	}

	@media ${CSS_CONSTANTS.DEVICES.laptopM} {
		flex: 0.5;
	}

	@media ${CSS_CONSTANTS.DEVICES.desktopM} {
		flex: 0.5;
	}
`;

export const RightSection = styled.div`
	width: 100%;
	flex: 0.3;

	@media ${CSS_CONSTANTS.DEVICES.mobileM} {
		flex: 1;
	}

	@media ${CSS_CONSTANTS.DEVICES.tablet} {
		flex: 1;
	}

	@media ${CSS_CONSTANTS.DEVICES.laptopM} {
		flex: 0.3;
	}

	@media ${CSS_CONSTANTS.DEVICES.desktopM} {
		flex: 0.3;
	}
`;

export const DashboardUpperSection = styled.div`
	display: grid;
	grid-template-columns: 1fr 0.4fr;
	width: 100%;
	gap: 10px;
`;

export const DashboardLowerSection = styled.div`
	display: grid;
	grid-template-columns: 1fr 0.4fr;
	width: 100%;
	gap: 10px;
`;
