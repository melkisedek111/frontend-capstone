export const intSizes = {
	mobileS: 320,
	mobileM: 375,
	mobileL: 425,
	tablet: 768,
	laptop: 1280,
	laptopM: 1366,
	laptopL: 1440,
	desktopM: 1920,
	desktopL: 2560,
};

const sizes = {
	mobileS: "320px",
	mobileM: "375px",
	mobileL: "425px",
	tablet: "768px",
	laptop: "1280px",
	laptopM: "1366px",
	laptopL: "1440px",
	desktopM: "1920px",
	desktopL: "2560px",
};

const CSS_CONSTANTS = {
	DEVICES: {
		mobileS: `(min-width: ${sizes.mobileS})`,
		mobileM: `(min-width: ${sizes.mobileM})`,
		mobileL: `(min-width: ${sizes.mobileL})`,
		tablet: `(min-width: ${sizes.tablet})`,
		laptop: `(min-width: ${sizes.laptop})`,
		laptopM: `(min-width: ${sizes.laptopM})`,
		laptopL: `(min-width: ${sizes.laptopL})`,
		desktopM: `(min-width: ${sizes.desktopM})`,
		desktopL: `(min-width: ${sizes.desktopL})`,
	},
	COLORPALLETS: {
		primary: "#090537",
		secondary: "#ffd700",
		accent_A: "#efb24a",
		danger: "#D2042D",
		success: "#0BDA51",
	},
	FONTS: {
		primary: "",
		secondary: "",
	},
	PADDINGS: {
		primary: "75px",
		mobileM: "20px",
		tablet: "25px",
	},
	RGBA: {
		secondary: (opacity = 1) => `rgba(255, 215, 0, ${opacity})`,
	},
	REQUEST_STATUS: {
		highPriority: "#800020",
		normalPriority: "#FFAC1C",
		lowPriority: "#008000",
	},
	STEPPER: {
		primary: "#3366FF",
		secondary: "#00AC69",
		warning: "#F4A100",
		danger: "#FF413A",
		mute: "#a7a7a7",
		icon: "#76B3D5",
	},
};

export default CSS_CONSTANTS;
