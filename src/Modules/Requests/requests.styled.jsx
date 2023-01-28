import styled from "styled-components";
import CSS_CONSTANTS from "../../utils/css.constants";

export const RequestsSection = styled.section``;

export const RequestsContainer = styled.div``;

export const RequestsHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	gap: 10px;
`;

export const RequestSubHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 15px;
	flex-wrap: wrap;
`;

export const RequestCards = styled.div`
	margin-top: 20px;
	display: flex;
	flex-wrap: wrap;
	flex-grow: 1;
	gap: 50px;

	@media only screen and (${CSS_CONSTANTS.DEVICES.mobileM}) {
		justify-content: center;
	}


`;
