import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import { stagger, useAnimate } from 'framer-motion'
import { Box, Typography } from '@mui/material'
import WAVES from 'vanta/dist/vanta.waves.min'
import * as THREE from 'three'
import AnimateDivs from './AnimateDivs'


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

    const [scope, animate] = useAnimate()
    AnimateDivs(scope, animate)

    return (
        <Box ref={vantaRef} sx={{ width: '100%', minHeight: '100vh', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <Box
                sx={{
                    position: 'relative',
                    zIndex: 2,
                    height: '100%',
                    width: '90%',
                    display: 'flex',
                    flexDirection: 'column',
                }}
                ref={homeRef}
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
                    <Box ref={scope}>
                        <div>
                            <Typography variant='h2'>Rich Beredo</Typography>
                        </div>
                        <div>
                            <Typography variant='h4' >Software Engineer</Typography>
                        </div>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
};

export default LandingPage