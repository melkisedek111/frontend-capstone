import styled from "styled-components";
import CSS_CONSTANTS from "../../../utils/css.constants";

export const NotificationIconResponsiveContainer = styled.div`
	position: relative;
	cursor: pointer;
	.label_container {
		position: relative;
		display: flex;
		align-items: center;
		gap: 20px;
		border-bottom: 0.5px solid #f0f0f0;
		padding: 10px;

		.dot {
			svg:nth-child(2) {
				position: absolute;
				color: red;
				font-size: 10px;
				/* right: 10px; */
				top: 1;
			}
		}

		:hover {
			svg:nth-child(1) {
				color: ${CSS_CONSTANTS.COLORPALLETS.accent_A};
			}
			p {
				color: #fff;
			}
			background-color: ${CSS_CONSTANTS.COLORPALLETS.primary};
		}
	}
`;
