import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';

import {
	Grid,
	Card,
	CardActions,
	CardContent,
	IconButton,
	Typography,
	CardMedia 
} from '@mui/material';


const infoString = `
Hi, my name is Jason, I have been a a tinkerer with all things CS related for most of most life,
this is my blog where I scream into the void about my random fixations ranging from all
the corners of computer science, occasionally, I may say something useful.
`;


const InfoCard = () => {

	const content = 
	<>
		<Grid container justifyContent="center">
			<Typography variant="h5" component="div" color="secondary">
				Technical screamings Jason Alexander
			</Typography>
		</Grid>
		<br />
		<Grid container>
			<Typography variant="body1">
				{infoString}
			</Typography>
		</Grid>
	</>;

	return (
		<Grid item md={11} xs={12}>
			<Card>
				<CardMedia
					sx={{ height: 140 }}
					image="/images/header_image.jpg"
					title="green iguana"
				/>
				<CardContent>
					{content}
				</CardContent>
				<CardActions>
					<Grid container>
						<Grid item xs={12}>
							<Typography variant="body2" sx={{ paddingLeft: 0.9 }}>
								Links I suppose
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<IconButton 
								size="small" 
								color="primary"
								onClick={() => { window.location.href = "https://www.linkedin.com/in/json-alexander"; }}
							>
								<LinkedInIcon />
							</IconButton>
							<IconButton 
								size="small" 
								color="primary"
								onClick={() => { window.location.href =  "https://github.com/jasonalexander-ja"; }}
							>
								<GitHubIcon />
							</IconButton>
							<IconButton 
								size="small" 
								color="primary"
								onClick={() => { window.location.href =  "https://t.me/crashtestdev"; }}
							>
								<TelegramIcon />
							</IconButton>
						</Grid>
					</Grid>
				</CardActions>
			</Card>
		</Grid>
	);
};


export default InfoCard;
