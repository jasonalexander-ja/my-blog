import React from 'react';

import {
	Drawer,
	MenuList,
	MenuItem,
	ListItemText
} from '@mui/material';


type NavigationProps = {
	drawerOpen: boolean,
	setDrawerOpen: (a: boolean) => void
};

const Navigation = ({
	drawerOpen,
	setDrawerOpen
}: NavigationProps) => {

	const open = drawerOpen;

	return (
		<Drawer 
			open={open}
			onClose={() => setDrawerOpen(false)}
		>
			<MenuList>
				<MenuItem>
					<ListItemText>Single</ListItemText>
				</MenuItem>
			</MenuList>
		</Drawer>
	);
};

export default Navigation;
