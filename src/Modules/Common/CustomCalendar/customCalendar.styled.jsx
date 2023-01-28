import styled from "styled-components";
import CSS_CONSTANTS from "../../../utils/css.constants";

export const CustomCalendarContainer = styled.div`
	background-color: #fff;
	padding: 20px;
	border-radius: 10px;
	h5 {
		font-size: 16px;
		margin-bottom: 20px;
		color: ${CSS_CONSTANTS.COLORPALLETS.primary};
	}

	.react-calendar {
		.react-calendar__navigation {
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-bottom: 0.5px solid #f0f0f0;
			padding-bottom: 20px;
			margin-bottom: 20px;
			button:nth-child(2) {
				border: none;
			}
			button {
				cursor: pointer;
				background-color: #fff;
				border: 0.5px solid #f0f0f0;
				padding: 5px 10px;
				border-radius: 5px;
				display: grid;
				place-items: center;
			}

			button:nth-child(1),
			button:nth-child(3) {
				:hover {
					color: #fff;
					background-color: ${CSS_CONSTANTS.COLORPALLETS.primary};
				}
			}
		}

		.react-calendar__month-view__weekdays {
			color: ${CSS_CONSTANTS.COLORPALLETS.primary};
			text-align: center;
			font-weight: bold;
			abbr {
				text-decoration: none;
			}
			margin-bottom: 15px;
		}

		.react-calendar__month-view__days {
			/* gap: 10px; */
			margin: 0 auto;
			.tile-sunday {
				color: red;

				:disabled {
					color: rgba(136, 8, 8, 0.35);
				}
			}
			.react-calendar__tile {
				height: auto !important;
				width: auto !important;
				text-align: center;
				border: none;
				background-color: #fff;
				padding: 10px;
				margin: 0;
				text-decoration: none;
				border-radius: 5px;
				cursor: pointer;
				border: 0.5px solid #f0f0f0;

				:hover:enabled {
					color: #fff;
					background-color: ${CSS_CONSTANTS.COLORPALLETS.primary};
				}
				:active:enabled {
					color: #fff;
					background-color: ${CSS_CONSTANTS.COLORPALLETS.primary};
				}
			}
		}
	}
`;
