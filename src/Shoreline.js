import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
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
import ShorelineBG1 from './ShorelineBG1.jpg';
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

    const [checked, setChecked] = React.useState(false);

    const handleChange = (isVisible) => {
        console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
        console.log(checked)
        setChecked(isVisible);

    };

    return (
        <ThemeProvider theme={theme} >
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar className="navbar" sx={{ boxShadow: 'none' }}>
                    <Toolbar className="center">
                        <MenuItem className="menu-item" >
                            <Typography color="inherit" noWrap className="nav-text" fontSize={{ xs: '1rem', sm: '1.5rem', md: '2rem', lg: '1.5rem' }} display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block' }}>
                                London Dry
                            </Typography>
                        </MenuItem>
                        <MenuItem className="menu-item">
                            <Typography color="inherit" noWrap className="nav-text" fontSize={{ xs: '1rem', sm: '1.5rem', md: '2rem', lg: '1.5rem' }} display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block' }}>
                                Berry Hibiscus
                            </Typography>
                        </MenuItem>
                        <MenuItem className="menu-item">
                            <Typography color="inherit" noWrap className="nav-text" fontSize={{ xs: '1rem', sm: '1.5rem', md: '2rem', lg: '1.5rem' }} display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block' }}>
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
                                            <Box
                                                component="img"
                                                sx={{
                                                    width: { xs: '50%', sm: '25%', md: '18%', lg: '20%' },
                                                }}
                                                alt="Hibiscus."
                                                src="/images/HibiscusSeal.png"
                                                className="hibiscus-seal"
                                            />
                                        </Fade>
                                    }
                                </VisibilitySensor>
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
                                <Container className="age-restriction-box animation" sx={{ pt: 12 }}>
                                    <VisibilitySensor>
                                        {({ isVisible }) =>
                                            <Fade in={isVisible} direction="down" timeout={1000}>
                                                <Box zeroMinWidth sx={{ border: 1, borderRadius: '5px', p: 1 }}  >
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
                <Box
                    style={{
                        backgroundColor: "#FFF7F0",
                        backgroundSize: "cover",
                        height: "80vh"
                    }} >
                    <Grid container spacing={0} className="middle">
                        <Grid item lg={6} md={6} sm={6} xs={6} >
                            <Container >
                                <Box sx={{ pb: 3 }}>
                                    <Typography
                                        variant="h2"
                                        sx={{ textDecoration: 'underline 3px' }}
                                        fontSize={{ xs: '1rem', sm: '1.5rem', md: '2rem', lg: '3rem' }}
                                    >
                                        Meet Shoreline
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography
                                        className="baikal"
                                        variant="overline"
                                        fontSize={{ xs: '1rem', sm: '1.5rem', md: '2rem', lg: '1.5rem' }}
                                    >
                                        <b>Our Values</b> are the core set of
                                        beliefs that we stand for and
                                        the guiding principles we use to
                                        shape our identity, personality,
                                        and interaction with our world.
                                    </Typography>
                                </Box>
                                <Box
                                    component="img"
                                    sx={{
                                        width: { xs: '50%', sm: '25%', md: '18%', lg: '60%' },
                                    }}
                                    alt="HB_Sea"
                                    src="/images/HB_Sea.png"
                                />
                            </Container>
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xs={6} display={{ xs: 'none', sm: 'none', md: 'none', lg: 'block' }} >
                            <Container>
                                <Container>
                                    <VisibilitySensor>
                                        {({ isVisible }) =>
                                            <Fade in={isVisible} direction="down" timeout={1000}>
                                                <Box>
                                                    <Typography
                                                        className="baikal"
                                                        variant="overline"
                                                        fontSize={{ xs: '1rem', sm: '1.5rem', md: '2rem', lg: '1rem' }}
                                                    >
                                                        Our Personality + Tone
                                                    </Typography>
                                                </Box>
                                            </Fade>
                                        }
                                    </VisibilitySensor>
                                </Container>
                                <Container sx={{ width: '50%' }} >
                                    <VisibilitySensor>
                                        {({ isVisible }) =>
                                            <Fade in={isVisible} direction="down" timeout={1000}>
                                                <Box>
                                                    <Typography
                                                        variant="h2"
                                                        sx={{ textDecoration: 'underline 3px', pb: 3 }}
                                                        className="hover"
                                                        fontSize={{ xs: '1rem', sm: '1.5rem', md: '2rem', lg: '3rem' }}
                                                    >
                                                        Fun
                                                    </Typography>
                                                </Box>
                                            </Fade>
                                        }
                                    </VisibilitySensor>

                                    <VisibilitySensor>
                                        {({ isVisible }) =>
                                            <Fade in={isVisible} direction="down" timeout={1000}>
                                                <Box>
                                                    <Typography
                                                        variant="h2"
                                                        sx={{ textDecoration: 'underline 3px', pb: 3 }}
                                                        className="hover"
                                                        fontSize={{ xs: '1rem', sm: '1.5rem', md: '2rem', lg: '3rem' }}
                                                    >
                                                        Courage
                                                    </Typography>
                                                </Box>
                                            </Fade>
                                        }
                                    </VisibilitySensor>

                                    <VisibilitySensor>
                                        {({ isVisible }) =>
                                            <Fade in={isVisible} direction="down" timeout={1000}>
                                                <Box>
                                                    <Typography
                                                        variant="h2"
                                                        sx={{ textDecoration: 'underline 3px', pb: 3 }}
                                                        className="hover"
                                                        fontSize={{ xs: '1rem', sm: '1.5rem', md: '2rem', lg: '3rem' }}
                                                    >
                                                        Responsibility
                                                    </Typography>
                                                </Box>
                                            </Fade>
                                        }
                                    </VisibilitySensor>

                                    <VisibilitySensor>
                                        {({ isVisible }) =>
                                            <Fade in={isVisible} direction="down" timeout={1000}>
                                                <Box>
                                                    <Typography
                                                        variant="h2"
                                                        sx={{ textDecoration: 'underline 3px', pb: 3 }}
                                                        className="hover"
                                                        fontSize={{ xs: '1rem', sm: '1.5rem', md: '2rem', lg: '3rem' }}
                                                    >
                                                        Freedom
                                                    </Typography>
                                                </Box>
                                            </Fade>
                                        }
                                    </VisibilitySensor>

                                    <VisibilitySensor>
                                        {({ isVisible }) =>
                                            <Fade in={isVisible} direction="down" timeout={1000}>
                                                <Box>
                                                    <Typography
                                                        variant="h2"
                                                        sx={{ textDecoration: 'underline 3px', pb: 3 }}
                                                        className="hover"
                                                        fontSize={{ xs: '1rem', sm: '1.5rem', md: '2rem', lg: '3rem' }}
                                                    >
                                                        Authenticity
                                                    </Typography>
                                                </Box>
                                            </Fade>
                                        }
                                    </VisibilitySensor>

                                    <VisibilitySensor>
                                        {({ isVisible }) =>
                                            <Fade in={isVisible} direction="down" timeout={1000}>
                                                <Box>
                                                    <Typography
                                                        variant="h2"
                                                        sx={{ textDecoration: 'underline 3px', pb: 3 }}
                                                        className="hover"
                                                        fontSize={{ xs: '1rem', sm: '1.5rem', md: '2rem', lg: '3rem' }}
                                                    >
                                                        Reliability
                                                    </Typography>
                                                </Box>
                                            </Fade>
                                        }
                                    </VisibilitySensor>

                                    <VisibilitySensor>
                                        {({ isVisible }) =>
                                            <Fade in={isVisible} direction="down" timeout={1000}>
                                                <Box>
                                                    <Typography
                                                        variant="h2"
                                                        sx={{ textDecoration: 'underline 3px', pb: 3 }}
                                                        className="hover"
                                                        fontSize={{ xs: '1rem', sm: '1.5rem', md: '2rem', lg: '3rem' }}
                                                    >
                                                        Optimism
                                                    </Typography>
                                                </Box>
                                            </Fade>
                                        }
                                    </VisibilitySensor>
                                </Container>
                            </Container>
                        </Grid>
                    </Grid>

                </Box>

                <Box
                    style={{
                        backgroundImage: `url(${GlassesBG})`,
                        backgroundColor: "#B5BB9F",
                        backgroundSize: "cover",
                        height: "80vh"
                    }} >
                    <Grid container spacing={0} className="middle">
                        <Grid item lg={6} md={6} sm={6} xs={6} display={{ xs: 'none', sm: 'none', md: 'none', lg: 'block' }}>
                            <Container sx={{ width: '50%' }} >

                                <VisibilitySensor>
                                    {({ isVisible }) =>
                                        <Fade in={isVisible} direction="down" timeout={1000}>
                                            <Box>
                                                <Typography
                                                    className="baikal"
                                                    variant="overline"
                                                    fontSize="15px"
                                                    sx={{ textDecoration: 'underline 1px' }}

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
                                                    fontSize="25px"
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
                                                    fontSize="25px"
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
                        <Grid item lg={6} md={6} sm={6} xs={6} >
                            <Container >
                                <Box>
                                    <Typography
                                        className="baikal"
                                        variant="overline"
                                        fontSize={{ xs: '1rem', sm: '1.5rem', md: '2rem', lg: '1.5rem' }}
                                    >
                                        <b>Our Personality</b> is made up of
                                        the four words our friends would
                                        use to describe us.
                                    </Typography>
                                </Box>
                                <Box
                                    component="img"
                                    sx={{
                                        width: { xs: '50%', sm: '25%', md: '18%', lg: '60%' },
                                    }}
                                    alt="HB_Sea"
                                    src="/images/Apple_Cut.png"
                                />
                                <Box>
                                    <Typography
                                        className="baikal"
                                        variant="overline"
                                        fontSize={{ xs: '1rem', sm: '1.5rem', md: '2rem', lg: '1.5rem' }}
                                    >
                                        <b>Our Tone</b> influences the laguage
                                        we use when interacting with our
                                        customer.
                                    </Typography>
                                </Box>

                            </Container>
                        </Grid>
                    </Grid>

                </Box>
            </main>
            {/* Footer */}
            <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
                <Typography variant="h6" align="center" gutterBottom>
                    FIND YOUR SHORELINE
                </Typography>
                <Copyright />
            </Box>
            {/* End footer */}
        </ThemeProvider >
    );
}