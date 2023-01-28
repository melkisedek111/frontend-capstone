import styled from "styled-components";
import CSS_CONSTANTS from "../../utils/css.constants";

export const DashboardSection = styled.section`
	/* min-height: 78vh; */
`;

export const DashboardContainer = styled.div`
	/* display: grid;
	grid-template-columns: 1fr .4fr; */
	display: flex;
	flex-wrap: wrap;
	flex-grow: 1;
	width: inherit;
	gap: 10px;
`;

export const LeftSection = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 10px;
	flex: .70;


	@media only screen and (${CSS_CONSTANTS.DEVICES.mobileM}) {
		flex: 1;
	}

	@media only screen and (${CSS_CONSTANTS.DEVICES.tablet}) {
		flex: .70;
	}

	@media only screen and (${CSS_CONSTANTS.DEVICES.laptopM}) {
		flex: .70;
	}

	@media only screen and (${CSS_CONSTANTS.DEVICES.desktopM}) {
		flex: .70;
	}
`;

export const LeftUpperSection = styled.div`
	/* display: grid;
	grid-template-columns: 1fr 1fr; */
	display: flex;
	flex-grow: 1;
	flex-wrap: wrap;
	gap: 10px;
`;

export const CardsContainer = styled.div`
	display: flex;
	flex: .5;
	flex-wrap: wrap;
	/* gap: 15px; */
	justify-content: space-between;

	@media only screen and (${CSS_CONSTANTS.DEVICES.mobileM}) {
		justify-content: center;
		flex: 1;
	}

	@media only screen and (${CSS_CONSTANTS.DEVICES.tablet}) {
		justify-content: space-around;
		flex: 1;
	}
	
	@media only screen and (${CSS_CONSTANTS.DEVICES.laptopM}) {
		justify-content: space-between;
		flex: .5;
	}

	@media only screen and (${CSS_CONSTANTS.DEVICES.desktopM}) {
		justify-content: space-between;
		flex: .5;
	}
`;

export const GraphContainer = styled.div`
	flex: .5;


	@media only screen and (${CSS_CONSTANTS.DEVICES.mobileM}) {
		flex: 1;
	}

	@media only screen and (${CSS_CONSTANTS.DEVICES.tablet}) {
		flex: 1;
	}

	@media only screen and (${CSS_CONSTANTS.DEVICES.laptopM}) {
		flex: .5;
	}

	@media only screen and (${CSS_CONSTANTS.DEVICES.desktopM}) {
		flex: .5;
	}
`;

export const RightSection = styled.div`
	width: 100%;
	flex: .30;

	@media only screen and (${CSS_CONSTANTS.DEVICES.mobileM}) {
		flex: 1;
	}

	@media only screen and (${CSS_CONSTANTS.DEVICES.tablet}) {
		flex: .30;
	}

	@media only screen and (${CSS_CONSTANTS.DEVICES.laptopM}) {
		flex: .30;
	}

	@media only screen and (${CSS_CONSTANTS.DEVICES.desktopM}) {
		flex: .30;
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

