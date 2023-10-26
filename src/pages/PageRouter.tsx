import React from "react";

import Home from "./Home";
import About from "./About";
import Pi5Scalpers from "./articles/Pi5Scalpers";

import FingerBoxCreator from "./FingerBoxCreator";


export const Routes = [
	{
		path: "/",
		element: <Home />
	},
	{
		path: "/about",
		element: <About />
	},
	{
		path: "/FingerBoxCreator",
		element: <FingerBoxCreator />
	},
	{
		path: "/acticles/pi5-scalpers",
		element: <Pi5Scalpers />
	}
];
