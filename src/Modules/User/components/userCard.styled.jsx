import styled from "styled-components";
import CSS_CONSTANTS from "../../../utils/css.constants";

export const UserCardContainer = styled.div`
	.userCard_header {
		display: flex;
		align-items: center;
		justify-content: space-between;
        margin: 20px 0;
		> div {
			display: flex;
			align-items: center;

			> div {
                margin-left: 10px;
				h5 {
					font-size: 18px;
				}

				p {
					font-size: 12px;
				}
			}
		}
	}

    .userCard_details {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid gray;
        padding: 10px 0px;
        flex-wrap: wrap;
        > div {
            display: flex;
            align-items: center;

            svg {
                color: ${CSS_CONSTANTS.COLORPALLETS.accent_A};
                margin-right: 5px;
            }
            h5 {
                font-weight: 500;
            }
        };
    }

    .userCard_action {
        display: flex;
        align-items: center;
        justify-content: space-between;

        div:nth-child(1) {
            text-align: center;

            p {
                font-size: 11px;
            }
            h5 {
                font-size: 17px;
            }
        }
    }
`;
