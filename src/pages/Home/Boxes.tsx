import {
    Grid,
    Card,
    CardContent,
    Typography,
    CardActions,
    Button,
    Link
} from '@mui/material';

import { useNavigate } from "react-router-dom";

const Boxes = () => {
    const navigate = useNavigate();

    const cards = [
        <Card key="TaperedTabBoxGen">
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="secondary" gutterBottom>
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
                <Button
                    size="small"
                    onClick={() => navigate("/FingerBoxCreator")}
                    color="secondary"
                >
                    Open
                </Button>
            </CardActions>
        </Card>,
        <Card key="TaperedTabBoxGen">
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="primary" gutterBottom>
                    Article
                </Typography>
                <Typography variant="h5" component="div">
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Are there Pi 5 Scalpers?
                </Typography>
                <Typography variant="body2">
                    A response to a <Link href="https://www.tomshardware.com/news/raspberry-pi-5-scalpers-push-prices-up-to-109-above-msrp">
                        Tom's Hardware article. 
                    </Link>
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    size="small"
                    onClick={() => navigate("/acticles/pi5-scalpers")}
                    color="primary"
                >
                    Open
                </Button>
            </CardActions>
        </Card>
    ];

    return (
        <Grid item md={11} xs={12} spacing={2} container justifyContent="flex-start">
            {
                cards.map((e, i) => (
                    <Grid item container xs={12} sm={6} md={3} key={`homepanel-${i}`}>
                        {e}
                    </Grid>
                ))
            }
        </Grid>
    );
};

export default Boxes;
