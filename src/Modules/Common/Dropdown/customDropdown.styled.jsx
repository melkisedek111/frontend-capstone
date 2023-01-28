import styled from "styled-components";
import CSS_CONSTANTS from "../../../utils/css.constants";

export const CustomDropdownSection = styled.div`
	position: relative;
`;

export const CustomDropdownContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	border: 1px solid #f0f0f0;
	padding: 10px;
	border-radius: 10px;
	cursor: pointer;
`;

export const DetailsContainer = styled.div`
	p {
		color: ${CSS_CONSTANTS.COLORPALLETS.primary};
		font-size: 12px;
		font-weight: bolder;
	}
	span {
		font-size: 12px;
		color: gray;
	}
`;

export const DropdownDetailsContainer = styled.div`
	position: absolute;
	top: 110%;
	left: 0;
	border: 1px solid #f0f0f0;
	/* padding: 10px; */
	border-radius: 8px;
	width: 100%;
	overflow: hidden;
    background-color: #fff;

`;

export const DropdownLinks = styled.div`
	/* padding: 5px;
	margin: 7px 0; */
	border-bottom: 1px solid #f0f0f0;
	display: flex;
	gap: 10px;
	align-items: center;
	justify-content: right;
	cursor: pointer;
	transition: all 0.2s ease-in-out;

	p {
		padding: 7px 0;
	}

	svg {
		margin-right: 10px;
	}

	:hover {
		p {
            color: #fff;
        }
        svg {
            color: ${CSS_CONSTANTS.COLORPALLETS.accent_A};
        }
		background-color: ${CSS_CONSTANTS.COLORPALLETS.primary};
	}
`;
