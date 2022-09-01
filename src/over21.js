import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import cans from './cans.jpg'
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import { borderColor } from '@mui/system';


let theme = createTheme();
theme = responsiveFontSizes(theme);


let over21

function isOver21(input) {
    over21 = input
    console.log(over21)
    if (over21) {
        document.getElementsByClassName('over21')[0].style.display = "none"
        document.querySelectorAll('.shoreline').forEach(function (el) {
            el.style.display = 'block';
        });
    }
    else {
        document.getElementsByClassName('over21text')[0].style.display = "none"
        document.getElementsByClassName('over21textno')[0].style.display = "block"
    }
}

export default function Over21(props) {

    return (
        <div className="over21">
            <ThemeProvider theme={theme}>
                <Box style={{ height: '100vh', backgroundImage: `url(${cans})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "0 0" }} className="center">
                    <Grid container>
                        <Grid item lg={2}>
                        </Grid>
                        <Grid item>
                            <div className="over21text">
                                <Container sx={{ pt: 30 }}>
                                    <Typography fontFamily="Titan One" fontSize="2rem" color="white" className="text-shadow" >Slow down there Captain.</Typography>
                                    <Typography fontFamily="Titan One" fontSize="1.5rem" color="white" className="text-shadow">Are you over 21?</Typography>
                                    <Button className="text-shadow" variant="outlined" sx={{
                                        mr: 2.5, mt: 1, borderColor: 'white', color: "white", '&:hover': {
                                            borderColor: 'white',
                                            transform: 'scale(1.1)'
                                        }
                                    }}
                                        onClick={() => isOver21(true)}
                                    > Yes</Button>
                                    <Button className="text-shadow" variant="outlined" sx={{
                                        mt: 1, borderColor: 'white', color: "white", '&:hover': {
                                            borderColor: 'white',
                                            transform: 'scale(1.1)'
                                        }
                                    }}
                                        onClick={() => isOver21(false)}
                                    > No</Button>
                                </Container>
                            </div>
                            <div className="over21textno">
                                <Container sx={{ pt: 50 }} >
                                    <Typography fontFamily="Titan One" fontSize="2rem" color="white">Sorry bud.</Typography>
                                    <Typography fontFamily="Titan One" fontSize="1.5rem" color="white">Come back when you're 21 to enjoy!</Typography>
                                </Container>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </ThemeProvider >
        </div>
    )
}