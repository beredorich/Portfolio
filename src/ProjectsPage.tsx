import React, { MutableRefObject } from 'react'
import { Box, Card, Typography } from '@mui/material'
import AnimatedBox from './AnimatedBox'

const ProjectsPage: React.FC<{ projectsRef: MutableRefObject<HTMLDivElement | null> }> = ({ projectsRef }) => {
    return (
        <Box ref={projectsRef} sx={{ width: '100%', alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', flexGrow: 1 }}>
            <Box sx={{ bgcolor: 'primary.main', width: '100%', pb: 5 }}>
                <Typography variant='h3' color='white' textAlign='center' pt={10}>Projects</Typography>
                <Typography textAlign='center' p={2} color='white'>Here are some projects I have a passion for and built for fun.</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '90%', flexGrow: 1, mt: -5, mb: 20 }}>
                <Card sx={{ flexBasis: { xs: '100%', sm: '100%', md: '33.333333%', lg: '33.333333%', xl: '33.333333%' }, minHeight: '500px' }}>
                    <Typography variant='h4'>ProjectStart</Typography>

                </Card>
                <Card sx={{ flexBasis: { xs: '100%', sm: '100%', md: '33.333333%', lg: '33.333333%', xl: '33.333333%' }, minHeight: '500px' }}>
                    <Typography variant='h4'>Project2</Typography>

                </Card>
                <Card sx={{ flexBasis: { xs: '100%', sm: '100%', md: '33.333333%', lg: '33.333333%', xl: '33.333333%' }, minHeight: '500px' }}>
                    <Typography variant='h4'>Project3</Typography>

                </Card>
            </Box >
        </Box >
    )
}


export default ProjectsPage


