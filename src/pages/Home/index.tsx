import React from 'react';

import { 
	Grid, 
	Container 
} from '@mui/material';

import InfoCard from './InfoCard';


const HomePage = () => {

	return (
		<Container maxWidth="lg" disableGutters={true}>
			<Grid
				container
				justifyContent="center"
				sx={{ padding: 2 }}
				spacing={2}
			>
				<InfoCard />
			</Grid>
		</Container>
	);
};

export default HomePage;
