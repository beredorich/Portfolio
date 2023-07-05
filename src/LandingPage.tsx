import React from 'react'
import AnimatedBox from './AnimatedBox'
import { Box, Typography } from '@mui/material'
import SinglePage from './SinglePage'
import videoGR from './assets/videoGR.mp4'
import ReactPlayer from 'react-player'

const Video = () => {
    return (
        <Box sx={{ opacity: .08, zIndex: 3, position: 'relative', bgcolor: 'red' }}>
            <ReactPlayer url={videoGR} playing={true} loop={true} muted={true} width={'100%'} height={'100%'} />
        </Box>

    );
};
const LandingPage: React.FC = () => {
    return (
        <Box sx={{ width: '100%', minHeight: '100vh', position: 'relative', display: 'flex' }}>
            <Box
                sx={{
                    position: 'relative',
                    zIndex: 2,
                    height: '90%',
                    width: '90%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Box>
                    <Typography variant='h1'>Rich Beredo</Typography>
                    <Typography variant='h3'>Software Engineer</Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    position: 'absolute',
                    zIndex: 1,
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    overflow: 'hidden',
                }}
            >
                <Video />
            </Box>
        </Box>
    );
};

export default LandingPage