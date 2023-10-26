import React, { useState, useMemo } from 'react';

import {
	Container,
	Grid,
	Card,
	CardContent,
	Typography,
    Divider,
    Link
} from '@mui/material';


const Pi5Scalpers = () => {

    return <>
        <Grid item xs={12}>
            <Typography gutterBottom={false} sx={{ textAlign: "center" }} variant="h5">
                Are there Pi 5 Scalpers?
            </Typography>
        </Grid>
        <Grid item xs={12} sx={{ paddingTop: '8px!important' }}>
            <Typography gutterBottom={false} color="secondary" sx={{ textAlign: "center" }} variant="body1">
                A response to a Tom's Hardware article <Link color="secondary" href="https://www.tomshardware.com/news/raspberry-pi-5-scalpers-push-prices-up-to-109-above-msrp">"Raspberry Pi 5 Scalpers Push Prices Up to 109% Above MSRP".</Link>
            </Typography>
            <Divider />
        </Grid>

        <Grid item xs={12} sx={{ paddingTop: '2px!important', paddingBottom: '2px!important' }}>
            <Typography gutterBottom={false} sx={{ textAlign: "right" }} color="text.secondary" variant="body1">
                26/10/2023
            </Typography>
        </Grid>
        
        <Grid item xs={12}>
            <Typography gutterBottom={false} variant="body1">
                Disclaimer that this article may age terribly. 
            </Typography>
        </Grid>
        
        <Grid item xs={12}>
            <Typography gutterBottom={false} color="primary" variant="h6">
                Preface 
            </Typography>
        </Grid>
        
        <Grid item xs={12}>
            <Typography gutterBottom={false} variant="body1">
                At the time of writing the Pi 5 has officially been available for just 3 days, a recent Tom's Hardware article 
                made the surprising claim that the cost of the Raspberry Pi has been increased to "109% Above MSRP", here I dig into 
                a as many ebay listings I can find at the time and investigate what scalpers there are and what effect they are 
                having. 
            </Typography>
        </Grid>

        <Grid item xs={12}>
            <Typography gutterBottom={false} variant="body1">
                With, at the time of writing, fewer than 10 eBay listings for Pi 5s, this was actually fairly easy, 
                not a single completed listing nor a single listing that reported to have multiple units in stock, 
                actually had any stock, with every single one either being labelled a "preorder", or stating in the 
                description that they will ship as soon as their stock will arrive by x date, most of these scalpers 
                are managing to scalp preorders which is novel.  
            </Typography>
        </Grid>
        
        <Grid item xs={12}>
            <Typography gutterBottom={false} color="primary" variant="h6">
                Findings
            </Typography>
        </Grid>

        <Grid item xs={12}>
            <Typography gutterBottom={false} variant="body1">
                Worth noting that only a single eBay seller, the shop <Link color="secondary" href="https://www.ebay.com/str/sweetlaptops">Sweet Laptops</Link> is 
                reporting multiple units for sale, claiming they will have their stock ready for shipment on October 31st. 
                Still, more curiously they only report 5-10 units for sale of the 4GB and 8GB models respectively. Given this 
                relatively low number and the end of October is when supposedly <Link color="secondary" href="</Link>"> the first standard preorder 
                batch will ship,</Link> I feel that it is most likely this seller used multiple payment methods and shipment 
                addresses and even possibly friends and family as proxies to get around the 1 preorder per person rule, and 
                further, I think that their reported shipment date of 31st of October is extremely wishful thinking and this will 
                ultimately end badly for them. 
            </Typography>
        </Grid>

        <Grid item xs={12}>
            <Typography gutterBottom={false} variant="body1">
                Beyond this single reseller and a scattering of people selling preorders for single units (few enough that any effects on the preorder
                queues are doubtful), I can only find 2 people who appear to actually be selling units they actually have, both listings are from the
                22nd of October (1 day before the official launch on the 23rd), this can be expected from priority boarding preorders, I myself
                received my Pi 5 on the 21st. 
            </Typography>
        </Grid>

        <Grid item xs={12}>
            <Typography gutterBottom={false} variant="body1">
                Digging into these listings, both are auctions which give neither seller precise control over the price, one 
                gives a reason for selling stating <Link color="secondary" href="https://www.ebay.co.uk/itm/225830862602">"they are now no longer 
                required for my project[s]",</Link> a fairly understandable reason especially when mixed with buyers regret, 
                and after checking the <Link color="secondary" href="https://www.ebay.co.uk/bfl/viewbids/225830862602">stating price of £0.99,
                </Link> this appears to back up their story and almost lending to a possible no intention of wanting to resell 
                their Pi 5 above the MSRP. 
            </Typography>
        </Grid>

        <Grid item xs={12}>
            <Typography gutterBottom={false} variant="body1">
                The other listing, on the other hand, <Link color="secondary" href="https://www.ebay.co.uk/itm/155844046380">does not give a 
                reason</Link> for reselling and only a short explanation of what it is they are selling but is also currently 
                only a few pounds above MSRP at the time of writing (£85 PS), with the starting price pretty much-being <Link color="secondary" href="https://www.ebay.co.uk/bfl/viewbids/155844046380">bang 
                on MSRP,</Link> a little less amicable than the previous reseller but still well within reason compared to scalping 
                behaviour we've seen previously. 
            </Typography>
        </Grid>
        
        <Grid item xs={12}>
            <Typography gutterBottom={false} color="primary" variant="h6">
                Conclusion
            </Typography>
        </Grid>

        <Grid item xs={12}>
            <Typography gutterBottom={false} variant="body1">
                In conclusion, in the Pi 5 space, there are indeed scalpers, however at the time of writing, there are very few 
                of them as I could find fewer than 10 in my search, out of this, the majority were scalping single unit preorders, 
                with not enough in total to have any effect on the preorder queues, a single one was able to scalp multiple 
                preorders but still also in low enough quantities where any affect the preorder queues is still unlikely, and 
                they are further unlikely to be able to fulfil their purchases any nearly on time; 2 were selling units that they 
                actually had, and one of these on the surface appeared to have no ill intent, this leads me to believe that currently, 
                the scalping we are seeing is almost a non-issue compared to the supply chain busting behaviour we have seen 
                previously in the Raspberry Pi space.
            </Typography>
        </Grid>
        
        <Grid item xs={12}>
            <Typography gutterBottom={false} color="primary" variant="h6">
                Thoughts
            </Typography>
        </Grid>

        <Grid item xs={12}>
            <Typography gutterBottom={false} variant="body1">
                But yes, in a few individual and isolated instances, some people have sold and bought Pi 5 preorders for up to and beyond 
                109% above the MSRP, but conting all the completed listings these come to fewer than 5 at time of writing, which when 
                compared to the all the preorders already placed, and even the people who have already received their Pi 5s this is 
                incredibly far from the trend that the Tom's Hardware article makes it out to be and making the article feel quite misleading. 
            </Typography>
        </Grid>
    </>;
}

const Layout = () => {

	return (
		<Container maxWidth="lg" disableGutters={true}>
			<Grid
				container
				justifyContent="center"
				sx={{ padding: 2 }}
				spacing={2}
			>
				<Grid item container md={11} xs={12}>
					<Card sx={{ width: "100%" }}>
						<CardContent>
							<Grid spacing={2} alignItems="center" container>
								<Pi5Scalpers />
							</Grid>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Layout;
