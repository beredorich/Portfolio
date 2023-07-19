import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import AnimatedBox from './AnimatedBox'
import { Box, Button, Card, CardMedia, Stack, Typography } from '@mui/material'
import videoGR from './assets/videoGR.mp4'
import ReactPlayer from 'react-player'
import RichLogo from './assets/logo_clear.png'
import Mountains from './assets/mountain.jpg'
import WAVES from 'vanta/dist/vanta.waves.min'
import CLOUDS from 'vanta/dist/vanta.clouds.min'
import * as THREE from 'three'


const LandingPage: React.FC<{ homeRef: MutableRefObject<HTMLDivElement | null> }> = ({ homeRef }) => {

    const [vantaEffect, setVantaEffect] = useState(0);
    const vantaRef = useRef(null);

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                WAVES({
                    el: vantaRef.current,
                    THREE: THREE,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 600.0,
                    minWidth: 375.0,
                    scale: 1.0,
                    scaleMobile: 1.0,
                    shininess: 73.00,
                    color: 0x6c6cc0,
                })
            );
        }
    }, [vantaEffect]);


    return (
        <Box ref={vantaRef} sx={{ width: '100%', minHeight: '100vh', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
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
                    justifyContent="center"
                    color={'white'}
                >
                    <Typography variant='h1'>Rich Beredo</Typography>
                    <Typography variant='h3'>Software Engineer</Typography>
                </Box>
            </Box>
        </Box>
    )
};

export default LandingPage