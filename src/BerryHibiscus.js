import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import VisibilitySensor from 'react-visibility-sensor';
import Fade from '@mui/material/Fade';
import Container from '@mui/material/Container';


export default function BerryHibiscus() {

    return (
        <div className="shoreline">
            <Box sx={{ backgroundColor: "#8c1d24", height: '70vh' }}>
                <Grid container spacing={2} className="center" >
                    <Grid item lg={6}>
                        <Typography
                            fontFamily="Rubik Mono One"
                            fontSize="3rem"
                            color="white"
                        >
                            The Hibiscus Blueberry
                        </Typography>
                        <Typography
                            fontFamily="Baikal"
                            fontSize="1.2rem"
                            color="white"
                        >
                            A fruit forward cider with a perfect amount of sweetness. Decadent notes of blueberry jam, red berries, and gentle tannic notes from floral Egyptian hibiscus. An off-dry finish prepares you for the next sip without becoming imposing on your palate.
                        </Typography>
                        <Typography
                            sx={{ pt: 2 }}
                            fontFamily="Baikal"
                            color="white"
                        >
                            Suggested Food Pairings:
                        </Typography>
                        <Typography
                            fontFamily="Baikal-Bold"
                            color="white"
                        >
                            Tea Cakes | Roasted Pork | Bloomy Rind Cheeses
                        </Typography>
                    </Grid>
                    <Grid item lg={5}>
                        <VisibilitySensor>
                            {({ isVisible }) =>
                                <Fade in={isVisible} direction="down" timeout={1000}>
                                    <Container sx={{ pt: 3 }}>
                                        <Box
                                            component="img"
                                            sx={{
                                                width: { xs: '20%', sm: '20%', md: '20%', lg: '70%' },
                                            }}
                                            alt="Hibiscus"
                                            src="/images/hibiscus_nobg.png"
                                            className="rotate-20"
                                            id="berry-ref"
                                        />
                                        <Typography
                                            fontFamily="Titan One"
                                            color="white"
                                        >
                                            5.4% ABV | 6G Sugar | Made with real fruit | Gluten free
                                        </Typography>
                                    </Container>
                                </Fade>
                            }
                        </VisibilitySensor>
                    </Grid>

                </Grid>
            </Box>
        </div>
    )

}