import styled from "styled-components";
import CSS_CONSTANTS from "../../../utils/css.constants";

export const CustomCardSection = styled.section``;
export const CustomCardContainer = styled.div`
	background-color: #fff;
    min-width: 270px;
    
    border-radius: 10px;
    border: 1px solid #f0f0f0;
    padding: 20px;
    overflow: hidden;
    position: relative;
    height: 210px;

    @media only screen and (${CSS_CONSTANTS.DEVICES.mobileM}) {
		width: max-content;
	}

	@media only screen and (${CSS_CONSTANTS.DEVICES.tablet}) {
		 min-width: 250px;
	}

	@media only screen and (${CSS_CONSTANTS.DEVICES.laptopM}) {
		 min-width: 270px;
	}

	@media only screen and (${CSS_CONSTANTS.DEVICES.desktopM}) {
		 min-width: 270px;
	}
`;
export const BackgroundCardIcon = styled.div`
    opacity: 0.05;
    position: absolute;
    bottom: 0;
    right: 10px;
    svg {
        font-size: 7.5rem;
    }
`;
export const CardDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 20px;
    svg {
        padding: 10px;
        color: ${CSS_CONSTANTS.COLORPALLETS.primary};
        background-color: #ecebf1;
        border-radius: 10px;
        font-size: 60px;
    }

    > div {
        display: flex;
        gap: 20px;
        align-items: center;
        h5 {
            color: ${CSS_CONSTANTS.COLORPALLETS.primary};
            font-size: 1.5rem;
        }

        h6 {
            font-size: 1rem;
            color: green;
        }
    }

    > h5 {
        font-weight: 400;
        font-size: 1.2rem;
        color: grey;
    }
`;
