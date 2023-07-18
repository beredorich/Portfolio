import React, { MutableRefObject } from 'react'
import AnimatedBox from './AnimatedBox'
import { Box, Button, Card, CardMedia, Stack, Typography } from '@mui/material'
import videoGR from './assets/videoGR.mp4'
import ReactPlayer from 'react-player'
import RichLogo from './assets/logo_clear.png'
import Mountains from './assets/mountain.jpg'


const LandingPage: React.FC<{ homeRef: MutableRefObject<HTMLDivElement | null> }> = ({ homeRef }) => {
    return (
        <Box ref={homeRef} sx={{ width: '100%', minHeight: '100vh', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
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
                        justifySelsf: 'center',
                        flexDirection: 'column',
                        height: '90%',
                    }}
                    display="flex"
                    justifyContent="center" // center child elements horizontally
                >
                    <Typography variant='h3'>Rich Beredo</Typography>
                    <Typography variant='h5'>Software Engineer</Typography>
                </Box>
            </Box>

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


        </Box>
    )
};

export default LandingPage