import React, { useEffect, useState } from 'react'
import AnimatedBox from './AnimatedBox'
import { AppBar, Box, Button, Card, CardMedia, Drawer, Stack, Typography } from '@mui/material'
import RichLogo from './assets/logo_clear.png'
import Mountains from './assets/mountain.jpg'
import { debounce } from 'lodash';
import MenuIcon from '@mui/icons-material/Menu';

const LandingPage: React.FC = () => {
    const [shrinkMenu, setShrinkMenu] = useState(false);
    useEffect(() => {
        const handleResize = debounce(() => {
            if (window.innerWidth < 600) {
                setShrinkMenu(true)
            } else {
                setShrinkMenu(false)
            }
        }, 500);

        window.addEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (window.innerWidth < 600) {
            setShrinkMenu(true)
        }
    }, []);

    const [toggleDrawer, setToggleDrawer] = useState(false);
    return (
        <Box sx={{ width: '100%', minHeight: '100vh', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <Box
                sx={{
                    height: '10%',
                    width: '100%',
                    zIndex: 2,
                }}
            >

            </Box>
            <Box
                sx={{
                    position: 'relative',
                    zIndex: 2,
                    height: '90%',
                    width: '90%',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >

                <Box
                    sx={{
                        alignSelf: 'center',
                        justifySelf: 'center',
                        flexDirection: 'column',
                        height: '90%',
                    }}
                    display="flex"
                    justifyContent="center" // center child elements horizontally
                >
                    <Typography variant='h3'>Hello my name is Rich Beredo.</Typography>
                    <Typography variant='h5'>Software Engineer</Typography>
                </Box>
            </Box >

            <Box
                sx={{
                    position: 'absolute',
                    zIndex: 1,
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    opacity: 0.2,
                }}
            >
                <img src={Mountains} height='100%' />
            </Box>


        </Box >
    );
};

export default LandingPage


