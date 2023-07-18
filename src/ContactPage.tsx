import React, { MutableRefObject } from 'react'
import AnimatedBox from './AnimatedBox'
import { Box, Button, Card, Stack, Typography } from '@mui/material'
import RichLogo from './assets/logo_clear.png'
import githubLogo from './assets/github.png'
import linkedinLogo from './assets/linkedin.png'

const ContactPage: React.FC<{ contactRef: MutableRefObject<HTMLDivElement | null> }> = ({ contactRef }) => {
    return (
        <Box ref={contactRef} width='100%' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', bgcolor: 'primary.main', color: 'white', pb: 20 }}>
            <Box bgcolor='darkblue' width='50%' border={5} borderRadius={10} borderColor='turquoise' p={7} mt={-10} display='flex' justifyContent='space-between' alignItems='center' flexWrap='wrap'>
                <Box width='33.33333%' justifyContent='center' alignItems='center'>
                    <Button variant='outlined' sx={{ border: 3, borderRadius: 10 }} style={{ borderColor: 'turquoise' }}><Typography textAlign='center' variant="h5" color='white'>Contact Info</Typography></Button>
                </Box>
                <Box width='33.33333%' justifyContent='center' alignItems='center'>
                    <Button variant='outlined' sx={{ border: 3, borderRadius: 10 }} style={{ borderColor: 'turquoise' }}>
                        <Typography color='white' variant='h5'>Download my Resume</Typography>
                    </Button>
                </Box>
                <Box width='33.33333%' display='flex' justifyContent='center' alignItems='center'>
                    <Button variant='outlined' sx={{ border: 3, borderRadius: 10 }} style={{ borderColor: 'turquoise' }}>
                        <Typography color='white'>Email Me</Typography>
                    </Button>
                </Box>
            </Box>
            <Box width='10%' mt={5} justifyContent='center' alignItems='center' display='flex'>
                <Stack justifyContent='center' alignItems='center'>
                    <Stack direction='row'>
                        <Button variant='outlined' sx={{ color: 'white' }}><img src={githubLogo} /> </Button>
                        <Button variant='outlined' sx={{ color: 'white' }}><img src={linkedinLogo} /> </Button>
                    </Stack>
                    <img src={RichLogo} alt="My Image" height={150} />
                </Stack>
            </Box>
        </Box >
    )
}
export default ContactPage