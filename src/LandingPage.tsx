import React from 'react'
import AnimatedBox from './AnimatedBox'
import { Box, Typography } from '@mui/material'
import SinglePage from './SinglePage'

const LandingPage: React.FC = () => {
    return (
        <SinglePage>
            <AnimatedBox animateDirection='xRight' height='90%' width='90%' justifyContent='center' alignItems='center' display='flex' flexDirection='column'>
                <Box>
                    <Typography variant='h1'>Rich Beredo</Typography>
                    <Typography variant='h3'>Software Engineer</Typography>
                </Box>
            </AnimatedBox>
        </SinglePage>
    )
}

export default LandingPage