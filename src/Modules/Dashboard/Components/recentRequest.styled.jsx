import styled from "styled-components";
import CSS_CONSTANTS from "../../../utils/css.constants";

export const RecentRequestInnerContainer = styled.div`
	width: 100%;
	background-color: #fff;
	border-radius: 10px;
	border: 1.5px solid #f0f0f0;
	padding: 10px 20px;
	color: ${CSS_CONSTANTS.COLORPALLETS.primary};
	.header {
		display: flex;
		align-items: center;
		gap: 20px;
		margin-bottom: 10px;
        justify-content: space-between;
		.header_details {
			font-size: 18px;
		}

        span {
            font-size: 12px;
        }
	}

	.sub_details {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 5px 0;
		border-top: 1.5px solid #f0f0f0;
		* {
			font-size: 12px;
		}
		svg {
			font-size: 17px;
		}
		p {
			font-weight: bolder;
		}
		> div {
			display: flex;
			align-items: center;
			gap: 10px;
		}
	}

    :hover {
        background-color: #f9f9f9;
    }
`;

export const HeaderTitle = styled.div`
	padding: 10px;
	background-color: ${prop => CSS_CONSTANTS.REQUEST_STATUS[prop.priority]};
	border-radius: 8px;
	p {
		font-weight: bolder;
		font-size: 16px;
		text-transform: uppercase;
		margin: 0;
		color: #fff;
	}
`;
