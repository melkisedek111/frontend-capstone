import styled from "styled-components";
import CSS_CONSTANTS from "../../../utils/css.constants";

export const CustomDropdownContainer = styled.div`
	div:nth-child(1) {
		margin-right: 15px !important;
	}
	svg {
		color: ${CSS_CONSTANTS.COLORPALLETS.primary} !important;
	}

	.MuiInputBase-root {
		background-color: #fff;
	}
	.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
		border-color: ${CSS_CONSTANTS.COLORPALLETS.primary} !important;
	}
`;
