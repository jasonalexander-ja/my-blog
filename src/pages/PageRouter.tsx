import React from "react";

import Home from "./Home";
import About from "./About";

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
	}
];
