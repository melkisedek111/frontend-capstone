import styled, { css } from "styled-components";
import CSS_CONSTANTS from "../../../utils/css.constants";

export const CustomButtonContainer = styled.button`
	background-color: ${props => props?.color ? CSS_CONSTANTS.COLORPALLETS[props.color] : CSS_CONSTANTS.COLORPALLETS.primary};
	color: #fff;
	border: none;
	padding: ${props => props.isDefault ? "15px 20px" : "7px 11px"};
	display: flex;
	align-items: center;
	gap: 15px;
	border-radius: 5px;
	cursor: pointer;
	font-size: 15px;
	${props => props?.fullWidth ? css`width: 100%;` : ""}
	${props => props?.fullHeight ? css`height: 100%;` : css`height: 56px;`}  
	
	> svg {
		margin-right: 10px;
	}
	transition: background-color 0.2s;

	:hover {
		filter: contrast(85%);
	}

	:active {
		filter: contrast(82%);
	}
`;
