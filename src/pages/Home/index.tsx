import React from 'react';

import { 
	Grid, 
	Container,
	Typography,
	Button,
	CardContent,
	CardActions,
	Card
} from '@mui/material';

import { useNavigate } from "react-router-dom";

import InfoCard from './InfoCard';


const HomePage = () => {
	const navigate = useNavigate();

	return (
		<Container maxWidth="lg" disableGutters={true}>
			<Grid
				container
				justifyContent="center"
				sx={{ padding: 2 }}
				spacing={2}
			>
				<InfoCard />
				<Grid item md={11} xs={12} container justifyContent="flex-start">
					<Grid item xs={2}>
						<Card sx={{ minWidth: 275 }}>
							<CardContent>
								<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
									Projects
								</Typography>
								<Typography variant="h5" component="div">
								</Typography>
								<Typography sx={{ mb: 1.5 }} color="text.secondary">
									Tapered-Tab Box Generator
								</Typography>
								<Typography variant="body2">
									An SVG mesh generator for laser cut tabbed boxes with tapered tabs.
								</Typography>
							</CardContent>
							<CardActions>
								<Button size="small" onClick={() => navigate("/FingerBoxCreator")}>Open</Button>
							</CardActions>
						</Card>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};

export default HomePage;
