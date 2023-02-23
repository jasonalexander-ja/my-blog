import React, { useState } from 'react';

import {
	createHashRouter,
	RouterProvider,
	Outlet
} from "react-router-dom";

import AppBar from './AppBar';
import Navigation from './Navigation';

import { Routes } from "../pages/PageRouter";


const Layout = () => {
	const [drawerOpen, setDrawerOpen] = useState(false);

	return (
		<>
			<AppBar
				drawerOpen={drawerOpen}
				setDrawerOpen={setDrawerOpen}
			/>
			<Navigation
				drawerOpen={drawerOpen}
				setDrawerOpen={setDrawerOpen}
			/>
			<Outlet />
		</>
	);
};


const router = createHashRouter([
	{
		path: "/",
		element: <Layout />,
		children: Routes
	}
]);


export default <RouterProvider router={router} />;
