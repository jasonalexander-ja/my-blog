import { 
	Grid, 
	Container
} from '@mui/material';

import InfoCard from './InfoCard';
import Boxes from './Boxes';


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
				<Boxes />
			</Grid>
		</Container>
	);
};

export default HomePage;
