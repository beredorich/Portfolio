import React from 'react'
import AnimatedBox from './AnimatedBox'
import { Box, Card, CardMedia, Typography } from '@mui/material'
import SinglePage from './SinglePage'
import videoGR from './assets/videoGR.mp4'
import ReactPlayer from 'react-player'
import RichLogo from './assets/logo_clear.png'

const Video = () => {
    return (
        <Box sx={{ opacity: .08, zIndex: 3, position: 'relative', bgcolor: 'red' }}>
            {/* <ReactPlayer url={videoGR} playing={true} loop={true} muted={true} width={'100%'} height={'100%'} /> */}

        </Box>

    );
};
const LandingPage: React.FC = () => {
    return (
        <Box sx={{ width: '100%', minHeight: '100vh', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>



            <Box
                sx={{
                    position: 'relative',
                    zIndex: 2,
                    height: '90%',
                    width: '90%',
                    display: 'flex',
                    flexDirection: 'row',
                    border: 1
                }}
            >
                <Box
                    sx={{
                        alignSelf: 'flex-start',
                        justifySelf: 'flex-start',
                        border: 1,
                    }}
                >
                    <img src={RichLogo} alt="My Image" height={100} />
                </Box>
                <Box
                    sx={{
                        alignSelf: 'center',
                        justifySelf: 'center',
                        flexDirection: 'column',
                        border: 1,
                        // width: '100%',
                    }}
                    display="flex"
                    justifyContent="center" // center child elements horizontally
                >
                    <Typography variant='h3'>Hello my name is Rich Beredo.</Typography>
                    <Typography variant='h5'>Software Engineer</Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default LandingPage