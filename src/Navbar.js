import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import { MenuItem } from '@mui/material';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

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

export default function Navbar(props, { londonRef }) {


    function scrollLondon() {
        var element = document.getElementById("london-dry-ref");
        element.scrollIntoView()
    }
    function scrollBerry() {
        var element = document.getElementById("berry-ref");
        element.scrollIntoView()
    }
    function scrollAbout() {
        var element = document.getElementById("about-ref");
        element.scrollIntoView()
    }

    HideOnScroll.propTypes = {
        children: PropTypes.element.isRequired,
        /**
         * Injected by the documentation to work in an iframe.
         * You won't need it on your project.
         */
        window: PropTypes.func,
    };


    return (
        <div className="shoreline">
            <HideOnScroll {...props}>
                <AppBar className="navbar" sx={{ boxShadow: 'none' }}>
                    <Toolbar className="center">
                        <MenuItem className="menu-item" >
                            <Typography fontFamily="Carter One" onClick={scrollLondon} id="my-btn" noWrap className="nav-text" fontSize={{ xs: '1rem', sm: '1.5rem', md: '2rem', lg: '1.5rem' }}>
                                London Dry
                            </Typography>
                        </MenuItem>
                        <MenuItem className="menu-item">
                            <Typography color="inherit" onClick={scrollBerry} fontFamily="Carter One" noWrap className="nav-text" fontSize={{ xs: '1rem', sm: '1.5rem', md: '2rem', lg: '1.5rem' }}>
                                Berry Hibiscus
                            </Typography>
                        </MenuItem>
                        <MenuItem className="menu-item">
                            <Typography color="inherit" onClick={scrollAbout} fontFamily="Carter One" noWrap className="nav-text" fontSize={{ xs: '1rem', sm: '1.5rem', md: '2rem', lg: '1.5rem' }}>
                                About
                            </Typography>
                        </MenuItem>
                        {/* <IconButton
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
                        </IconButton> */}
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
        </div>
    )
}

