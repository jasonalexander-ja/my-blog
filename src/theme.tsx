import { createTheme, Theme } from '@mui/material/styles';
import { orange } from '@mui/material/colors';


export const getTheme: (darkMode: boolean) => Theme = darkMode => {
	let theme = createTheme({
		palette: {
			mode: darkMode ? "dark" : "light",
			primary: {
				main: '#04f704'
			},
			secondary: orange,
		}
	});

	return createTheme(theme);
};
