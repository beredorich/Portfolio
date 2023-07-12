import React from 'react'
import AnimatedBox from './AnimatedBox'
import { Box, Card, Typography } from '@mui/material'

const ContactPage = () => {
    return (
        <Box minHeight='60vh' width='100%' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', bgcolor: 'primary.main', color: 'white' }}>
            <AnimatedBox animateDirection="yDown" alignItems='center' justifyContent='center' display='flex'>
                <Box bgcolor='red'>
                    <Typography variant="h3">Contact</Typography>
                </Box>
            </AnimatedBox>
            <AnimatedBox animateDirection="yDown" height='50%' width='40%' display='flex'>
                <Card sx={{ m: 5, flex: 1 }}>Name
                </Card>
            </AnimatedBox>
        </Box>
    )

}

export default ContactPage