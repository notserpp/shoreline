import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Divider } from '@mui/material';

function Copyright() {
    return (

        <Typography variant="body2" align="center">
            {'Copyright © '}
            <Link color="inherit" underline="none" href="https://mui.com/">
                Shoreline Beverages
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );

}

export default function Footer() {

    return (
        <div className="shoreline">
            <Box sx={{ bgcolor: 'transparent' }} component="footer" className="center">
                <IconButton href="https://www.instagram.com/drinkshoreline/" target="_blank">
                    <InstagramIcon />
                </IconButton>
                <Typography fontFamily="Carter One" align="center" sx={{ pb: 2, }}>
                    <Link href="mailto: hello@drinkshoreline.com" underline="none" sx={{ color: 'black' }}>HELLO@DRINKSHORELINE.COM</Link>
                </Typography>
                <Copyright />
            </Box>
        </div >
    )
}

