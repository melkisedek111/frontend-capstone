import styled from "styled-components";
import CSS_CONSTANTS from "../../../utils/css.constants";

export const CustomTextFieldContainer = styled.div`
	.MuiFormLabel-root .Mui-focused {
		color: ${CSS_CONSTANTS.COLORPALLETS.primary} !important;
	}

	.MuiFormControl-root {
		background-color: #fff;
	}

	.css-sn8fib-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused.MuiOutlinedInput-notchedOutline {
		border-color: red !important;
	}

	textarea:focus {
		border-color: ${CSS_CONSTANTS.COLORPALLETS.primary} !important;
	}

	.MuiInputBase-input:focus {
		border-color: ${CSS_CONSTANTS.COLORPALLETS.primary} !important;
	}

	/* background-color: #fff;
    border: .2px solid #fff;
	padding: 16.5px 14px 16.5px 14px;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    align-items: center;
    gap: 10px;

    svg {
        color: gray;
    }

	input {
		border: none;
        font-size: 15px;
		:focus {
			outline: none;
		}
        width: 100%;
        min-width: 200px;
	}
    
	:focus-within {
		border: .2px solid ${CSS_CONSTANTS.COLORPALLETS.primary};
	} */
`;
