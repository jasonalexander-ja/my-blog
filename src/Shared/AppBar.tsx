import React, { useContext } from "react";

import { useNavigate } from "react-router-dom";

import {
	AppBar as MuiAppBar,
	IconButton,
	Typography,
	ButtonBase,
	Toolbar,
	Grid,
} from "@mui/material";

import LightModeIcon from "@mui/icons-material/LightMode";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

import { AppContext } from "../AppContext";


type AppBarProps = {
	drawerOpen: boolean,
	setDrawerOpen: (a: boolean) => void
};


const AppBarContainer = (props: { children: JSX.Element }) => {

	return (
		<MuiAppBar color="inherit" enableColorOnDark={true} position="sticky">
			<Toolbar>
				<Grid
					container
					className="foo"
				>
					{props.children}
				</Grid>
			</Toolbar>
		</MuiAppBar>
	);
};

const AppBar = ({
	drawerOpen,
	setDrawerOpen
}: AppBarProps) => {
	const context = useContext(AppContext);
	
	const navigate = useNavigate();
	const toggleDarkMode = () => context.toggleDarkMode();

	const icon = 
		<img
			src="/images/logo.svg"
			alt="FTLC Logo"
			className="logo-tint"
			style={{
				marginLeft: 7,
				width: 30
			}}
		/>;

	return (
	<AppBarContainer>
		<Grid 
			item
			container
			alignItems="center"
			sx={{ justifyContent: "space-between" }}
		>
			<Grid
				item
				container
				sm={11}
				xs={12}
				alignItems="center"
				wrap="nowrap"
				sx={{ justifyContent: { xs: "space-between", sm: "flex-start" } }}
			>
				{/* <IconButton onClick={handleDrawerClose} sx={{ display: "flex" }}>
					<MenuIcon />
				</IconButton> */}
				<ButtonBase onClick={() => navigate("/")}>
					<Typography gutterBottom={false} variant="h5" sx={{ display: { xs: "none", sm: "flex" } }}>
						For The Love Of Code {icon}
					</Typography>
					<Typography gutterBottom={false} variant="h5" sx={{ display: { xs: "flex", sm: "none" } }}>
						FTLC  {icon}
					</Typography>
				</ButtonBase>
			</Grid>
			<Grid
				item
				container
				sm={1}
				xs={0}
				sx={{ display: { xs: "none", sm: "flex" } }}
				justifyContent="flex-end"
			>
				<IconButton onClick={toggleDarkMode} sx={{ display: "flex" }} color="secondary">
					{
						context.darkMode ? <LightModeIcon /> : <LightModeOutlinedIcon />
					}
				</IconButton>
			</Grid>
		</Grid>
	</AppBarContainer>
	);
}

export default AppBar;
