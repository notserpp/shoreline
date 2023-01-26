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
                        backgroundColor: "rgb(255, 247, 240)"
                    }} >
                    <Grid container spacing={2} className="middle">
                        <Grid item lg={12} md={12} sm={12} xs={12} >
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
                                                    width: { xs: '70%', sm: '60%', md: '50%', lg: '50%' },
                                                }}
                                                alt="Shoreline"
                                                src="/images/Shoreline2.png"
                                                className="shoreline-tag"
                                            />
                                        </Fade>
                                    }
                                </VisibilitySensor>
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