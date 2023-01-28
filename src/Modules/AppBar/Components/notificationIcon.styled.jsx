import styled, { css } from "styled-components";
import CSS_CONSTANTS from "../../../utils/css.constants";

export const NotificationIconSection = styled.div`
	position: relative;
`;

export const NotificationIconContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	border: 1px solid #f0f0f0;
	padding: 15px;
	border-radius: 10px;
	cursor: pointer;
	transition: all 0.2s ease-in-out;

	svg:nth-child(2) {
		position: absolute;
		color: red;
		font-size: 10px;
		right: 10px;
		top: 10px;
	}

	:hover {
		svg:nth-child(1) {
			color: ${CSS_CONSTANTS.COLORPALLETS.accent_A};
		}
		background-color: ${CSS_CONSTANTS.COLORPALLETS.primary};
	}
`;

export const ItemListContainer = styled.div`
	z-index: 100;
	background-color: #fff;
	overflow: auto;
	border: 1px solid #f0f0f0;
	position: absolute;

	${(props) =>
		props?.isResponsive
			? css`
					top: 100%;
					height: 200px;
					width: 100%;
					left: 0;
			  `
			: css`
					-webkit-border-radius: 10px;
					-webkit-border-top-right-radius: 0;
					-moz-border-radius: 10px;
					-moz-border-radius-topright: 0;
					border-radius: 10px;
					border-top-right-radius: 0;
					top: 110%;
					right: 0%;
					width: 350px;
					height: 380px;
					::-webkit-scrollbar-track {
						-webkit-box-shadow: inset 0 0 4px #f0f0f0;
						background-color: #f5f5f5;
					}

					::-webkit-scrollbar {
						width: 4px;
						background-color: #f5f5f5;
					}

					::-webkit-scrollbar-thumb {
						background-color: ${CSS_CONSTANTS.COLORPALLETS.primary};
					}
			  `};
`;

export const ItemNotification = styled.div`
	border-bottom: 1px solid #f0f0f0;
	padding: 10px;
	transition: all 0.2s ease-in-out;
	cursor: pointer;
	p {
		font-size: 14px;
	}

	span {
		font-size: 10px;
	}

	> div {
		display: flex;
		align-items: center;
		justify-content: space-between;

		span:nth-child(2) {
			font-style: italic;
		}
	}

	:hover {
		background-color: ${CSS_CONSTANTS.COLORPALLETS.primary};

		p,
		span {
			color: #fff;
		}
	}
`;
