import { createGlobalStyle } from "styled-components";
import { AsideVar, BasicVar, DefaultColor, DeviceWidth, FontSize, FontSize_Sm, FontStyle, device } from "./variables";
import { setVariable } from "utils/style.utils";
import TacticRound from "assets/font/tactic-round/TacticRound-Bld.ttf";
import Gilroy from "assets/font/gilroy/Gilroy-Regular.ttf";
import GilroyMedium from "assets/font/gilroy/Gilroy-Medium.ttf";
import Stigo from "assets/font/stigo/Stigo_Regular.ttf";

const GlobalStyle = createGlobalStyle`
	@font-face {
        font-family: 'Gilroy';
        src: url(${Gilroy});
        font-weight: ${FontStyle.normal.value};
        font-style: normal;
    }

	@font-face {
		font-family: 'Gilroy';
		src: url(${GilroyMedium});
		font-weight: ${FontStyle.bold.value};
		font-style: normal;
	}

	@font-face {
		font-family: 'TacticRound';
		src: url(${TacticRound});
		font-weight: ${FontStyle.normal.value};
		font-style: normal;
	}

	@font-face {
		font-family: 'Stigo';
		src: url(${Stigo});
		font-weight: ${FontStyle.normal.value};
		font-style: normal;
	}

	:root {
		${setVariable(DefaultColor)}
		${setVariable(DeviceWidth)}
		${setVariable(BasicVar)}
		${setVariable(FontSize)}
		${setVariable(AsideVar)}
	}

	html {
		box-sizing: border-box;
		font-family: ${BasicVar.font1.label};
		line-height: ${BasicVar.lineH.label};
		font-size: ${FontSize.fSize.label};
		color: ${BasicVar.color.label};
		-ms-text-size-adjust: 100%;
		-webkit-text-size-adjust: 100%;
	}


	body {
		margin: 0;
		background: ${BasicVar.bg.label};
		background-size: 120% 140%;
		background-position: 25% 100%;
		overflow: hidden;
    	user-select: none;
	}

	*, *:before, *:after {
		box-sizing: inherit;
		font-family: inherit;
		font-size: inherit;
		line-height: inherit;
		text-transform: inherit;
		color: inherit;
	}

	#root {
		position: relative;
		z-index: 1;
		overflow: hidden;
		min-height: 100vh;

		@media ${device.mobileL} {
			${setVariable(FontSize_Sm)}
		}
	}
	
	ul {
		padding: 0;
		margin: 0;
	}

	span {
		display: inline-block;
	}

	a {
		display: inline-block;
		text-decoration: none;
	}

	a, button, input[type=button], input[type=submit] {
		cursor: pointer;
	}

	input {
		min-width: 0;
	}

	&::-webkit-scrollbar {
		position: absolute;
		width: 5px;
		height: 5px;
	}

	&::-webkit-scrollbar-track {
		background: rgba(255, 255, 255, 0.1);
	}

	&::-webkit-scrollbar-thumb {
		background: #999;
		border-radius: 5px;
	}

	&::-webkit-scrollbar-thumb:hover {
		background: #888;
	}
`

export default GlobalStyle;
