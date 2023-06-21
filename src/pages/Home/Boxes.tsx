import {
    Grid,
    Card,
    CardContent,
    Typography,
    CardActions,
    Button
} from '@mui/material';

import { useNavigate } from "react-router-dom";

const Boxes = () => {
	const navigate = useNavigate();

    const cards = [
        <Card sx={{ minWidth: 275 }} key="TaperedTabBoxGen">
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
                <Button 
                    size="small" 
                    onClick={() => navigate("/FingerBoxCreator")}
                    color="secondary"
                >
                    Open
                </Button>
            </CardActions>
        </Card>
    ];

    return (
        <Grid item md={11} xs={12} container justifyContent="flex-start">
            <Grid item xs={12} sm={6} md={2}>
                {cards}
            </Grid>
        </Grid>
    );
};

export default Boxes;
