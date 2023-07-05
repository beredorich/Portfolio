import React from 'react'
import SinglePage from './SinglePage'
import { Box, Card, Typography } from '@mui/material'
import AnimatedBox from './AnimatedBox'

const ProjectsPage = () => {
    return (
        <SinglePage>
            <Box sx={{ height: '80%', width: '90%' }}>
                <Typography variant='h3'>Projects</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', height: '100%', width: '100%' }}>
                    <AnimatedBox animateDirection='xRight' display='flex' flexWrap='wrap' flexBasis={{ xs: '100%', sm: '100%', md: '100%', lg: '50%', xl: '50%' }}>
                        <Card sx={{ flex: 1 }}>
                            <Typography variant='h4'>Project1</Typography>
                        </Card>
                    </AnimatedBox>
                    <AnimatedBox animateDirection='yDown' display='flex' flexWrap='wrap' flexBasis={{ xs: '100%', sm: '100%', md: '100%', lg: '50%', xl: '50%' }}>
                        <Card sx={{ flex: 1 }}>
                            <Typography variant='h4'>Project2</Typography>
                        </Card>
                    </AnimatedBox>
                    <AnimatedBox animateDirection='yDown' display='flex' flexWrap='wrap' flexBasis={{ xs: '100%', sm: '100%', md: '100%', lg: '50%', xl: '50%' }}>
                        <Card sx={{ flex: 1 }}>
                            <Typography variant='h4'>Project3</Typography>
                        </Card>
                    </AnimatedBox>
                    <AnimatedBox animateDirection='yUp' display='flex' flexWrap='wrap' flexBasis={{ xs: '100%', sm: '100%', md: '100%', lg: '50%', xl: '50%' }}>
                        <Card sx={{ flex: 1 }}>
                            <Typography variant='h4'>Project4</Typography>
                        </Card>
                    </AnimatedBox>
                </Box>

            </Box>
        </SinglePage >
    )
}


export default ProjectsPage


