import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Divider } from '@mui/material';

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

export default function Footer() {

    return (
        <div className="shoreline">
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
        </div>
    )
}

