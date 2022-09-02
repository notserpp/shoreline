import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import VisibilitySensor from 'react-visibility-sensor';
import Fade from '@mui/material/Fade';
import Container from '@mui/material/Container';
import GlassesBG from './openwater.jpg';
import { Divider } from '@mui/material';
import Footer from './Footer';


export default function About() {

    return (
        <div className="shoreline">
            <Box
                style={{
                    backgroundSize: "cover",
                    height: "100vh",
                    backgroundImage: `url(${GlassesBG})`,
                }} >
                <Container>
                    <Grid container spacing={10} className="middle" sx={{ pt: 10 }}>
                        <Grid item lg={6} md={12} sm={12} xs={12} >
                            <Container >
                                <Box sx={{ pb: 3 }}>
                                    <Typography
                                        fontFamily="Titan One"
                                        fontSize={{ xs: '1.5rem', sm: '1.5rem', md: '2rem', lg: '3rem' }}
                                        id="about-ref"
                                    >
                                        MEET SHORELINE
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography
                                        className="baikal"
                                        variant="overline"
                                        fontSize={{ xs: '1rem', sm: '1rem', md: '1.25rem', lg: '1.5rem' }}
                                    >
                                        <b>Our Values</b> are the core set of
                                        beliefs that we stand for and
                                        the guiding principles we use to
                                        shape our identity, personality,
                                        and interaction with our world.
                                    </Typography>
                                </Box>
                            </Container>
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xs={6} display={{ xs: 'none', sm: 'none', md: 'none', lg: 'block' }} >
                            <Container>
                                <VisibilitySensor>
                                    {({ isVisible }) =>
                                        <Fade in={isVisible} direction="down" timeout={1000}>
                                            <Box>
                                                <Typography
                                                    fontFamily="Titan One"
                                                    fontSize={{ xs: '1rem', sm: '1.5rem', md: '2rem', lg: '1.5rem' }}
                                                >
                                                    Our Mission + Vision
                                                </Typography>
                                            </Box>
                                        </Fade>
                                    }
                                </VisibilitySensor>

                                <VisibilitySensor>
                                    {({ isVisible }) =>
                                        <Fade in={isVisible} direction="down" timeout={1000}>
                                            <Box sx={{ pb: 4 }}>
                                                <Typography
                                                    className="h2"
                                                    variant="overline"
                                                    fontSize={{ xs: '1rem', sm: '1.5rem', md: '1.5rem', lg: '1.2rem' }}
                                                >
                                                    To create delicious,
                                                    roaring ciders, that
                                                    challenge convention and
                                                    catalyze conversations.
                                                </Typography>
                                            </Box>
                                        </Fade>
                                    }
                                </VisibilitySensor>

                                <Divider />

                                <VisibilitySensor>
                                    {({ isVisible }) =>
                                        <Fade in={isVisible} direction="down" timeout={1000}>
                                            <Box sx={{ pt: 4 }} >
                                                <Typography
                                                    className="h2"
                                                    variant="overline"
                                                    fontSize={{ xs: '1rem', sm: '1.5rem', md: '1.5rem', lg: '1.2rem' }}
                                                >
                                                    To promote exploration
                                                    and personalization in
                                                    the industry; to redefine
                                                    the perceptions of cider.
                                                </Typography>
                                            </Box>
                                        </Fade>
                                    }
                                </VisibilitySensor>
                            </Container>
                        </Grid>
                    </Grid>
                    <Footer />
                </Container>
            </Box>
        </div >
    )

}