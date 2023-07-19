import { Box, Typography } from '@mui/material'
import React, { MutableRefObject } from 'react'
import EmbryRiddle from './assets/Embry-Riddle_Aeronautical_University_seal.png'
import AnimateDivs from './AnimateDivs'
import { useAnimate } from 'framer-motion'

const AboutPage: React.FC<{ aboutRef: MutableRefObject<HTMLDivElement | null> }> = ({ aboutRef }) => {
    const [scope, animate] = useAnimate()
    AnimateDivs(scope, animate)
    return (
        <div ref={aboutRef}>
            <Box ref={scope} width='100%' bgcolor='white' color='primary.main' display='flex' flexWrap='wrap' position='relative' flexDirection='row' zIndex={-1} pt={10} pb={10}>
                <Box
                    flexBasis={{ xs: '100%', sm: '100%', md: '30%', lg: '30%', xl: '40%' }}
                    width='30%' display='flex' justifyContent='center' alignItems='center'>
                    <img src={EmbryRiddle} alt="My Image" height={300} />
                </Box>
                <Box
                    flexBasis={{ xs: '100%', sm: '100%', md: '40%', lg: '40%', xl: '40%' }}
                    mt={10} width='40%' flexWrap='wrap'>
                    <Typography variant='h4' textAlign='center' sx={{ mb: 3 }}>Hi my name is Rich Beredo.</Typography>
                    <Typography variant='h6' textAlign='center'>
                        I am a software engineer with a passion for learning and creating. I currently hold an{' '}
                        <span style={{ color: 'red', fontSize: '1.5rem' }}>Active Secret Clearance</span>{' '}.
                        I graduated from Embry-Riddle Aeronautical University with a B.S. in Electrical Engineering.
                    </Typography>
                </Box>
            </Box>
        </div>
    )
}

export default AboutPage