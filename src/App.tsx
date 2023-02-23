import React, { useMemo, useState } from 'react';

import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

import { AppContext, ContextModel } from './AppContext';
import { getTheme } from './theme';

import Layout from './Shared/Layout';


const App = () => {
	const defaultDm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

	const [darkMode, setDarkMode] = useState(defaultDm);

	const toggleDarkMode = useMemo(() => () => setDarkMode(o => !o), [setDarkMode]);

	const appContext = useMemo(() => new ContextModel(toggleDarkMode, darkMode), [toggleDarkMode, darkMode]);
	const theme = useMemo(
		() => getTheme(darkMode),
		[darkMode],
	);

	return (
		<AppContext.Provider value={appContext}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<>
					{Layout}
				</>
			</ThemeProvider>
		</AppContext.Provider>
	);
};

export default App;
