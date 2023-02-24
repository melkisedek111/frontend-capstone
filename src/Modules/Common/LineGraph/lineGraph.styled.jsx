import styled from "styled-components";
import CSS_CONSTANTS from "../../../utils/css.constants";

export const LineGraphSection = styled.section``;

export const LineGraphContainer = styled.div`
	border-radius: 10px;
	border: 1px solid #f0f0f0;
	padding: 20px;
	background-color: #fff;
	overflow-X: auto;
	/* width: 540px; */

	/* @media ${CSS_CONSTANTS.DEVICES.mobileM} {
		width: 330px;
	}

	@media ${CSS_CONSTANTS.DEVICES.tablet} {
		width: 725px;
	}

	@media ${CSS_CONSTANTS.DEVICES.laptopM} {
		width: 100%;
	}

	@media ${CSS_CONSTANTS.DEVICES.desktopM} {
		width: 100%;
	} */
`;

export const GraphDetails = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	margin-bottom: 15px;
	> div {
		display: flex;
		align-items: center;
		gap: 15px;
	}

`;

export const GraphHeaderTitle = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;


	h4 {
		font-weight: 600;
	}
	margin-top: 10px;
	margin-bottom: 30px;
`;

export const GraphHeader = styled.div``;
