import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import { Divider } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import BeachBG from './beach.jpg';
import VisibilitySensor from 'react-visibility-sensor';
import Fade from '@mui/material/Fade';


let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function Shoreline(props) {

    return (
        <div className="shoreline">
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Box
                    style={{
                        backgroundImage: `url(${BeachBG})`,
                        backgroundSize: "cover",
                        height: "100vh",
                        color: "#f5f5f5"
                    }} >
                    <Grid container spacing={2} className="middle">
                        <Grid item lg={7} md={10} sm={10} xs={12} >
                            <Container >

                                <VisibilitySensor>
                                    {({ isVisible }) =>
                                        <Fade in={isVisible} direction="down" timeout={1000}>
                                            <Typography
                                                variant="h2"
                                                align="center"
                                                className="migra find-your"
                                            >
                                                Find Your
                                            </Typography>
                                        </Fade>
                                    }
                                </VisibilitySensor>
                                <VisibilitySensor>
                                    {({ isVisible }) =>
                                        <Fade in={isVisible} direction="down" timeout={1000}>
                                            <Box
                                                component="img"
                                                sx={{
                                                    width: { xs: '50%', sm: '50%', md: '50%', lg: '50%' },
                                                }}
                                                alt="Shoreline"
                                                src="/images/Shoreline2.png"
                                                className="shoreline-tag"
                                            />
                                        </Fade>
                                    }
                                </VisibilitySensor>
                                <Container className="age-restriction-box animation" sx={{ pt: 3 }}>
                                    <VisibilitySensor>
                                        {({ isVisible }) =>
                                            <Fade in={isVisible} direction="down" timeout={1000}>
                                                <Box sx={{ border: 1, borderRadius: '5px', p: 1 }}  >
                                                    <Typography
                                                        fontSize={{ xs: '.5rem', sm: '.5rem', md: '.5rem', lg: '1rem' }}
                                                        variant="h6"
                                                        className="age-restriction"
                                                        align="center"
                                                        whiteSpace="nowrap"
                                                        overflow="hidden"
                                                    >
                                                        MUST BE 21+ TO ENTER
                                                    </Typography>
                                                </Box>
                                            </Fade>
                                        }
                                    </VisibilitySensor>

                                </Container>
                            </Container>

                        </Grid>
                        <Grid item lg={5} md={8} sm={8} xs={8} display={{ xs: 'none', sm: 'none', md: 'none', lg: 'block' }}>
                            <Container className="box-can-container">
                                <Box
                                    component="img"
                                    sx={{
                                        width: { xs: '50%', sm: '25%', md: '18%', lg: '80%' },
                                    }}
                                    alt="Hibiscus."
                                    src="/images/LondonDry.png"
                                    className="london-dry"
                                />
                                <Box
                                    component="img"
                                    sx={{
                                        width: { xs: '50%', sm: '25%', md: '18%', lg: '40%' },
                                        display: 'none'
                                    }}
                                    alt="Hibiscus."
                                    src="/images/LondonDry_Final.png"
                                    className="london-dry-can"
                                />
                            </Container>
                        </Grid>
                    </Grid>

                </Box>


                {/* Footer */}

                {/* End footer */}
            </ThemeProvider >
        </div>
    );
}