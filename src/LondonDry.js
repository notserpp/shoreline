import * as React from "react";
import { useRef } from "react";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import VisibilitySensor from 'react-visibility-sensor';
import Fade from '@mui/material/Fade';
import Container from '@mui/material/Container';


export default function LondonDry() {
    let londonRef = useRef();

    return (
        <div className="shoreline">
            <Box sx={{ backgroundColor: "#FFF7F0", height: '70vh' }} >
                <Grid container spacing={2} className="center" >
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
                                            src="/images/london_nobg.png"
                                            className="rotate-0"
                                            id="london-dry-ref"
                                        />
                                        <Typography
                                            fontFamily="Titan One"
                                        >
                                            6.6% ABV | 1G Sugar
                                        </Typography>
                                    </Container>
                                </Fade>
                            }
                        </VisibilitySensor>
                    </Grid>
                    <Grid item lg={6} >
                        <Typography
                            fontFamily="Rubik Mono One"
                            fontSize="3rem"
                        >
                            The London Dry
                        </Typography>
                        <Typography
                            fontFamily="Baikal"
                            fontSize="1.2rem"
                        >
                            An approachable dry cider with a bright acidity profile balanced by just a touch of apple sweetness. The profile begins with notes of crisp honeyed apples, the finish is reminiscent of a refreshing sauvignon blanc. Easy drinking and clean, this cider is enjoyed as much on the beach with a charcuterie board as it is with barbecue fare.
                        </Typography>
                        <Typography
                            sx={{ pt: 2 }}
                            fontFamily="Baikal"
                        >
                            Suggested Food Pairings:
                        </Typography>
                        <Typography
                            fontFamily="Baikal-Bold"
                        >
                            Aged Hard Cheeses | Smoked Brisket
                        </Typography>
                    </Grid>

                </Grid>
            </Box>
        </div>
    )

}