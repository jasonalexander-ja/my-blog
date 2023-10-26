import React from "react";

import Home from "./Home";
import Pi5Scalpers from "./articles/Pi5Scalpers";

import FingerBoxCreator from "./FingerBoxCreator";


export const Routes = [
	{
		path: "/",
		element: <Home />
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
