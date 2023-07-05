import React from 'react'
import AnimatedBox from './AnimatedBox'
import { Box, Card, Typography } from '@mui/material'

const ContactPage = () => {
    return (
        <Box minHeight='40vh' width='50%' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <AnimatedBox animateDirection="yDown">
                <Typography variant="h3">Contact</Typography>
            </AnimatedBox>
            <AnimatedBox animateDirection="yDown" height='100%' width='100%' display='flex'>
                <Card sx={{ m: 5, flex: 1 }}>Name
                </Card>
            </AnimatedBox>
        </Box>
    )

}

export default ContactPage