import React from 'react'
import AnimatedBox from './AnimatedBox'
import { Box, Button, Card, CardMedia, Stack, Typography } from '@mui/material'
import SinglePage from './SinglePage'
import videoGR from './assets/videoGR.mp4'
import ReactPlayer from 'react-player'
import RichLogo from './assets/logo_clear.png'
import Mountains from './assets/mountain.jpg'

const Video = () => {
    return (
        <Box sx={{ opacity: .08, zIndex: 3, position: 'relative', bgcolor: 'red' }}>
            <ReactPlayer url={videoGR} playing={true} loop={true} muted={true} width={'100%'} height={'100%'} />
        </Box>

    );
};
const LandingPage: React.FC = () => {
    return (
        <Box sx={{ width: '100%', minHeight: '100vh', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <Box
                sx={{
                    height: '10%',
                    width: '100%',
                    zIndex: 2,
                }}
            >
                <Stack direction='row' justifyContent='space-between' bgcolor='primary.main'>
                    <Box border={1} bgcolor='primary.main' borderRadius={6} ml={5}>
                        <img src={RichLogo} alt="My Image" height={70} />
                    </Box>
                    <Stack direction='row' sx={{ mr: 5 }} color='white'>
                        <Button sx={{ mr: 5 }} variant='text' color='secondary' size='large' style={{ maxHeight: '80px' }}>Experience</Button>
                        <Button sx={{ mr: 5 }} variant='text' color='secondary' size='large' style={{ maxHeight: '80px' }}>Projects</Button>
                        <Button sx={{ mr: 5 }} variant='text' color='secondary' size='large' style={{ maxHeight: '80px' }}>Contact Me</Button>
                    </Stack>
                </Stack>
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