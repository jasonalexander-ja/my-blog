import { createContext } from "react";


export class ContextModel {
	
	toggleDarkModeInner: () => void;
	darkMode: boolean;

	constructor (toggleDarkMode: () => void, darkMode: boolean) {
		this.toggleDarkModeInner = toggleDarkMode;
		this.darkMode = darkMode;
	}

	toggleDarkMode(): void {
		this.toggleDarkModeInner();
	}
}


export const AppContext = createContext(new ContextModel(() => {}, false));

