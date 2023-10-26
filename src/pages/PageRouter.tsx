import React from "react";

import Home from "./Home";

import FingerBoxCreator from "./FingerBoxCreator";


export const Routes = [
	{
		path: "/",
		element: <Home />
	},
	{
		path: "/FingerBoxCreator",
		element: <FingerBoxCreator />
	}
];
