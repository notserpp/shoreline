import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Slide from '@mui/material/Slide';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import { Divider, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import InstagramIcon from '@mui/icons-material/Instagram';
import GlassesBG from './openwater.jpg';
import BeachBG from './beach.jpg';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import PropTypes from 'prop-types';
import VisibilitySensor from 'react-visibility-sensor';
import Fade from '@mui/material/Fade';


function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}



HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Shoreline
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}



let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function Album(props) {

    const londonRef = React.useRef(null)
    const hibiscusRef = React.useRef(null)
    const aboutRef = React.useRef(null)
    const londonScroll = () => londonRef.current.scrollIntoView()
    const hibiscusScroll = () => hibiscusRef.current.scrollIntoView()
    const aboutScroll = () => aboutRef.current.scrollIntoView()

    return (
        <div className="shoreline">
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <HideOnScroll {...props}>
                    <AppBar className="navbar" sx={{ boxShadow: 'none' }}>
                        <Toolbar className="center">
                            <MenuItem className="menu-item" >
                                <Typography fontFamily="Carter One" noWrap className="nav-text" onClick={londonScroll} fontSize={{ xs: '1rem', sm: '1.5rem', md: '2rem', lg: '1.5rem' }} display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block' }}>
                                    London Dry
                                </Typography>
                            </MenuItem>
                            <MenuItem className="menu-item">
                                <Typography color="inherit" fontFamily="Carter One" noWrap className="nav-text" onClick={hibiscusScroll} fontSize={{ xs: '1rem', sm: '1.5rem', md: '2rem', lg: '1.5rem' }} display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block' }}>
                                    Berry Hibiscus
                                </Typography>
                            </MenuItem>
                            <MenuItem className="menu-item">
                                <Typography color="inherit" fontFamily="Carter One" noWrap className="nav-text" onClick={aboutScroll} fontSize={{ xs: '1rem', sm: '1.5rem', md: '2rem', lg: '1.5rem' }} display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block' }}>
                                    About
                                </Typography>
                            </MenuItem>
                            <IconButton
                                className="hamburger"
                                size="large"
                                sx={{
                                    position: 'absolute',
                                    color: '#FFFFFF'
                                }}
                            >
                                <MenuIcon sx={{
                                    display: { xs: 'block', sm: 'block', md: 'none', lg: 'none' },

                                }} />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                </HideOnScroll>
                <main>
                    {/* Hero unit */}
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
                    {/* Hero unit */}
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
                                                    ref={londonRef}
                                                    className="rotate-0"
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
                                    An approachable dry cider with a bright acidity profile balanced by just a touch of apple sweetness. The profile begins with notes of crisp honeyed apples, the finish is reminiscent of a refreshing sauvignon blanc. Easy drinking and clean, this cider would be as at home next to a charcuterie board as it is with barbecue fare.
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
                                    An approachable dry cider with a bright acidity profile balanced by just a touch of apple sweetness. The profile begins with notes of crisp honeyed apples, the finish is reminiscent of a refreshing sauvignon blanc. Easy drinking and clean, this cider would be as at home next to a charcuterie board as it is with barbecue fare.
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
                                                    ref={hibiscusRef}
                                                    className="rotate-20"
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

                    <Box
                        style={{
                            backgroundColor: "#FFF7F0",
                            backgroundSize: "cover",
                            height: "80vh",
                            backgroundImage: `url(${GlassesBG})`,
                        }} >
                        <Grid container spacing={0} className="middle">
                            <Grid item lg={6} md={6} sm={6} xs={6} >
                                <Container >
                                    <Box sx={{ pb: 3 }}>
                                        <Typography
                                            fontFamily="Titan One"
                                            fontSize={{ xs: '1rem', sm: '1.5rem', md: '2rem', lg: '3rem' }}
                                        >
                                            MEET SHORELINE
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography
                                            className="baikal"
                                            variant="overline"
                                            fontSize={{ xs: '1rem', sm: '1.5rem', md: '2rem', lg: '1.5rem' }}
                                            ref={aboutRef}
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
                            <Grid item lg={6} md={6} sm={6} xs={6} display={{ xs: 'none', sm: 'none', md: 'none', lg: 'block' }}>
                                <Container sx={{ width: '50%' }} >

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
                                                <Box sx={{ pt: 4 }}>
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

                    </Box>


                </main>
                {/* Footer */}
                <Box sx={{ bgcolor: 'background.paper', pt: 4 }} component="footer" className="center">
                    <IconButton href="https://www.instagram.com/drinkshoreline/" target="_blank">
                        <InstagramIcon />
                    </IconButton>
                    <Typography fontFamily="Carter One" align="center" sx={{ pb: 4 }}>
                        <Link href="mailto: hello@drinkshoreline.com">HELLO@DRINKSHORELINE.COM</Link>
                    </Typography>
                    <Divider />


                    <Copyright />
                </Box>
                {/* End footer */}
            </ThemeProvider >
        </div>
    );
}