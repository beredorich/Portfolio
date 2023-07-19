import React, { MutableRefObject, useState } from 'react'
import AnimatedBox from './AnimatedBox'
import { Box, Button, Card, Drawer, Link, Stack, Typography } from '@mui/material'
import RichLogo from './assets/logo_clear.png'
import RichLogoBlack from './assets/logo_white.png'
import githubLogo from './assets/github.png'
import linkedinLogo from './assets/linkedin.png'

const ContactPage: React.FC<{ contactRef: MutableRefObject<HTMLDivElement | null> }> = ({ contactRef }) => {

    const [contactDrawer, setContactDrawer] = useState(false);

    const handleDownload = () => {
        fetch('/assets/Beredo-Resume.docx')
            .then((response) => {
                response.blob().then((blob) => {
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = 'Beredo-Resume.docx';
                    a.click();
                });
            })
            .catch((error) => {
                console.error('Error downloading file:', error);
            });
    };


    return (
        <Box ref={contactRef} width='100%' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white' }}>
            <Box flexGrow={1} bgcolor='darkblue' width='50%' border={5} borderRadius={10} borderColor='turquoise' p={7} mt={-12} display='flex' justifyContent='center' alignItems='center' flexWrap='wrap'>
                <Box
                    pb={2}
                    display='flex'
                    sx={{ flexBasis: { xs: '100%', sm: '100%', md: '50%', lg: '50%', xl: '50%' } }}
                    justifyContent='center' alignItems='center'>
                    <Button variant='outlined' sx={{ border: 3, borderRadius: 10, p: 2 }} style={{ borderColor: 'turquoise' }}
                        onClick={() => setContactDrawer(true)}
                    >
                        <Typography textAlign='center' variant="h5" color='white'>Contact Info</Typography></Button>
                </Box>
                {/* <Box pb={2} sx={{ flexBasis: { xs: '100%', sm: '100%', md: '33.333333%', lg: '33.333333%', xl: '33.333333%' } }}
                    display='flex'
                    justifyContent='center' alignItems='center'>
                    <Button variant='outlined' sx={{ border: 3, borderRadius: 10, p: 2 }} style={{ borderColor: 'turquoise' }}>
                        <Typography variant='h5' color='white'>Email Me</Typography>
                    </Button>
                </Box> */}
                <Box pb={2} sx={{ flexBasis: { xs: '100%', sm: '100%', md: '50%', lg: '50%', xl: '50%' } }}
                    display='flex' justifyContent='center' alignItems='center'>
                    <Button variant='outlined' sx={{ border: 3, borderRadius: 10, p: 2 }} style={{ borderColor: 'turquoise' }} onClick={handleDownload}>
                        <Typography color='white' variant='h5'>Download Resume</Typography>
                    </Button>
                </Box>
                <Drawer anchor='bottom' open={contactDrawer} onClose={() => setContactDrawer(false)}>
                    <Stack width='100%' justifyContent='center' alignItems='center'>
                        <Typography variant='h2'>Rich Beredo</Typography>
                        <Typography variant='h2'>richberedo@gmail.com</Typography>
                        <Typography variant='h2'>757-752-7462</Typography>
                        <Box pt={10}>
                            <img src={RichLogoBlack} alt="My Image" height={150} />
                        </Box>
                    </Stack>
                </Drawer>
            </Box>
            <Box width='10%' mt={5} justifyContent='center' alignItems='center' display='flex'>
                <Stack justifyContent='center' alignItems='center'>
                    <Stack direction='row' spacing={4}>
                        <Link href='https://github.com/beredorich'>
                            <Button><img src={githubLogo} /> </Button>
                        </Link>
                        <Link href='https://www.linkedin.com/in/richardberedo/'>
                            <Button><img src={linkedinLogo} /> </Button>
                        </Link>
                    </Stack>
                    <img src={RichLogoBlack} alt="My Image" height={150} />
                </Stack>

            </Box>
        </Box >
    )
}
export default ContactPage