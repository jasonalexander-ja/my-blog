import React from "react";

import Home from "./Home";
import About from "./About";


export const Routes = [
	{
		path: "/",
		element: <Home />
	},
	{
		path: "/about",
		element: <About />
	}
];
