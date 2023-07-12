import { Box, Typography } from '@mui/material'
import React from 'react'
import Clouds from './assets/cloud2.png'

const AboutPage = () => {
    return (

        <Box width='100%' height='50vh' bgcolor='primary.main' color='white' display='flex' position='relative' flexDirection='column' zIndex={-1}>
            <Box
                display='flex'
                flexDirection='column'
                position='relative'
                zIndex={1}
            >
                <Typography variant='h3' textAlign='center'>About</Typography>
                <Typography variant='h4' textAlign='center'>I am a full stack developer</Typography>
                <Typography variant='h4' textAlign='center'>I am a full stack developer</Typography>
                <Typography variant='h4' textAlign='center'>I am a full stack developer</Typography>
                <Typography variant='h4' textAlign='center'>I am a full stack developer</Typography>
            </Box>
            <Box
                sx={{
                    position: 'relative',
                    top: -200,
                    left: 0,
                    zIndex: 3,
                    height: '100%',
                    display: 'flex',
                }}
            >
                <img src={Clouds} height='100%' />
                <img src={Clouds} height='100%' />
            </Box>
        </Box>

    )
}

export default AboutPage