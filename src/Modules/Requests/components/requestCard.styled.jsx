import styled from "styled-components";
import CSS_CONSTANTS from "../../../utils/css.constants";

export const RequestCardContainer = styled.div`
	max-width: 350px;
    min-width: 300px;
	background-color: #fff;
	border-radius: 5px;
	.sub_container {

        padding: 15px;
    }

	.header {
		h5 {
			font-size: 17px;
		}
		p {
			font-size: 11px;
		}
	}

    .details {
        > div {
            span {
                font-size: 13px;
                color: gray;
            }

            p {
                margin: 5px 0 10px 0; 
            }
        }

        .main_info {
            p {
                font-weight: bold;
            }
        }

        .description {
            p {
                font-size: 14px;
                text-align: justify;
                line-height: 20px;
            }
        }
    }
    .request_process {
        span {
                font-size: 13px;
                color: gray;
            }
    }
	.label_container {
		text-align: center;
        background-color: ${CSS_CONSTANTS.COLORPALLETS.primary};
        padding: 20px 0;
        color: #fff;
		h4 {
			font-size: 20px;
            margin: 10px;
		}

		> div {
			display: flex;
			align-items: center;
			justify-content: space-around;

            > div {
                span {
                    font-size: 11px;
                    color: #f0f0f0;
                }

                p {
                    margin-top: 5px;
                }
            }
		}
	}

    .button_container {
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 15px;
    }

    @media ${CSS_CONSTANTS.DEVICES.mobileM} {
		margin: 10px;
	}

	@media ${CSS_CONSTANTS.DEVICES.tablet} {
		margin: 10px;
	}

	@media ${CSS_CONSTANTS.DEVICES.laptopM} {
		margin: 10px;
	}

	@media ${CSS_CONSTANTS.DEVICES.desktopM} {
		margin: 0;
	}
`;
