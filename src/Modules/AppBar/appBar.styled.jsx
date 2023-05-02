import styled, { css } from "styled-components";
import CSS_CONSTANTS from "../../utils/css.constants";

export const AppBarSection = styled.section`
	display: grid;

	.show {
		/* position: absolute;
		left: 0;
		top: 0;
		background-color: #fff;
		height: 100%; */
		display: block;
		z-index: 100;
	}
	@media ${CSS_CONSTANTS.DEVICES.mobileM} {
		grid-template-columns: ${(props) =>
			props.isOpenSidebar ? "0.17fr 1fr" : "1fr" };
	}

	@media ${CSS_CONSTANTS.DEVICES.tablet} {
		grid-template-columns: ${(props) =>
			props.isOpenSidebar ? "0.17fr 1fr" : "1fr" };
	}

	@media ${CSS_CONSTANTS.DEVICES.laptopM} {
		grid-template-columns: 0.17fr 1fr;
	}

	@media ${CSS_CONSTANTS.DEVICES.desktopM} {
		grid-template-columns: 0.17fr 1fr;
	}
`;

export const AppBarContainer = styled.div``;

export const TitleContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
	> svg {
		font-size: 30px;
		background-color: #f0f0f0;
		border-radius: 5px;

		@media ${CSS_CONSTANTS.DEVICES.mobileM} {
			display: block;
		}

		@media ${CSS_CONSTANTS.DEVICES.tablet} {
			display: block;
		}

		@media ${CSS_CONSTANTS.DEVICES.laptopM} {
			display: none;
		}

		@media ${CSS_CONSTANTS.DEVICES.desktopM} {
			display: none;
		}
	}
`;

export const LeftBarMainContainer = styled.div`
	position: relative;
	@keyframes slideIn {
		0% {
			transform: translateX(-100%);
		}
		100% {
			transform: translateX(0);
		}
	}
	animation: slideIn 0.5s ease-in-out forwards;
	@media ${CSS_CONSTANTS.DEVICES.mobileM} {
		display: none;
	}

	@media ${CSS_CONSTANTS.DEVICES.tablet} {
		display: none;
	}

	@media ${CSS_CONSTANTS.DEVICES.laptopM} {
		display: block;
	}

	@media ${CSS_CONSTANTS.DEVICES.desktopM} {
		display: block;
	}
`;

export const LeftBarContainer = styled.div`
	padding: 10px 20px;

	@media ${CSS_CONSTANTS.DEVICES.mobileM} {
		display: block;
	}

	@media ${CSS_CONSTANTS.DEVICES.tablet} {
		display: block;
	}

	@media ${CSS_CONSTANTS.DEVICES.laptopM} {
		display: block;
	}

	@media ${CSS_CONSTANTS.DEVICES.desktopM} {
		display: block;
	}
`;

export const PageContainer = styled.div``;
export const TopBarMainContainer = styled.div``;

export const PageComponentContainer = styled.div`
	background-color: #ececf0;
	width: 100%;
	padding: 20px;
	height: 90vh;
	overflow-y: auto;

	@media ${CSS_CONSTANTS.DEVICES.mobileM} {
		overflow-y: none;
		height: 100%;
	}

	@media ${CSS_CONSTANTS.DEVICES.tablet} {
		height: 90vh;
		overflow-y: auto;
	}

	@media ${CSS_CONSTANTS.DEVICES.laptopM} {
		height: 90vh;
		overflow-y: auto;
	}

	@media ${CSS_CONSTANTS.DEVICES.desktopM} {
		height: 90vh;
		overflow-y: auto;
	}
`;

export const TopBarContainer = styled.div`
	position: relative;
	padding: 0 20px 0 0;
	height: 5rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 20px;
	h5 {
		font-size: 23px;
	}

	@media ${CSS_CONSTANTS.DEVICES.mobileM} {
		padding: 0 20px 0 0;
	}

	@media ${CSS_CONSTANTS.DEVICES.tablet} {
		padding: 0 50px 0 0;
	}

	@media ${CSS_CONSTANTS.DEVICES.laptopM} {
		padding: 0 20px 0 0;
	}

	@media ${CSS_CONSTANTS.DEVICES.desktopM} {
		padding: 0 20px 0 0;
	}
`;

export const LinksContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

export const LinkContainer = styled.div`
	padding: 10px;
	background-color: #fff;
	border-radius: 5px;
	display: flex;
	align-items: center;
	gap: 20px;
	color: #808080;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	${(props) =>
		props.isSelected &&
		css`
			background-color: #090537;
			h5 {
				color: #fff;
			}

			svg {
				background-color: #fff;
				color: #efb24a;
			}
		`}

	h5 {
		font-weight: 300;
		font-size: 17px;
	}

	svg {
		font-size: 28px;
		padding: 2.5px;
		border-radius: 5px;
	}

	:hover {
		background-color: #090537;

		h5 {
			color: #fff;
		}

		svg {
			background-color: #fff;
			color: #efb24a;
		}
	}
`;

export const NavigationListContainer = styled.div`
	display: flex;
	gap: 10px;
	align-items: center;

	@media ${CSS_CONSTANTS.DEVICES.mobileM} {
		display: none;
	}

	@media ${CSS_CONSTANTS.DEVICES.tablet} {
		display: flex;
	}

	@media ${CSS_CONSTANTS.DEVICES.laptopM} {
		display: flex;
	}

	@media ${CSS_CONSTANTS.DEVICES.desktopM} {
		display: flex;
	}
`;

export const NavigationListContainerResponsive = styled.div`
	position: absolute;
	width: 100%;
	background-color: #fff;
	top: 100%;
	left: 0;
	z-index: 200;

	.profile {
		display: flex;
		align-items: center;
		gap: 10px;
		padding: 10px;
		> div {
			p {
				color: ${CSS_CONSTANTS.COLORPALLETS.primary};
				font-size: 12px;
				font-weight: bolder;
			}
			span {
				font-size: 12px;
				color: gray;
			}
		}
	}

	.link {
		display: flex;
		align-items: center;
		gap: 10px;
		border-bottom: 0.5px solid #f0f0f0;
		padding: 10px;

		:hover {
			background-color: red;
		}
	}
`;


export const IconContainer = styled.div`
	margin: 10px 0;
	margin-bottom: 20px;
	display: flex;
	align-items: center;
	gap: 5px;
	

	h5 {
		font-size: 20px;
	}
	svg {
		color: ${CSS_CONSTANTS.COLORPALLETS.accent_A};
		font-size: 40px;
	}
`;