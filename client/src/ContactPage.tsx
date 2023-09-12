import React, { MutableRefObject, useState, useContext } from 'react'
import { Box, Button, Card, Drawer, Link, Stack, Typography } from '@mui/material'
import RichLogoBlack from './assets/logo_white.png'
import githubLogo from './assets/github.png'
import linkedinLogo from './assets/linkedin.png'
import AnimateDivs from './AnimateDivs'
import { useAnimate } from 'framer-motion'
import ContactDrawerContent from './ContactDrawer'
import DownloadResume from './DownloadResume'
import { AppContext } from './App'

type ContactPageProps = {
    contactRef: MutableRefObject<HTMLDivElement | null>
    homeRef: MutableRefObject<HTMLDivElement | null>
}


const ContactPage: React.FC<ContactPageProps> = ({ contactRef, homeRef }) => {

    const [contactDrawer, setContactDrawer] = useState(false);
    const { drawerOpen, setDrawerOpen } = useContext(AppContext)
    const handleHome = () => {
        if (homeRef.current) {
            homeRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const [scope, animate] = useAnimate()
    AnimateDivs(scope, animate)
    return (
        <Box ref={scope} width='100%' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white' }}>
            <Box ref={contactRef} width='100%' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white' }}>
                <Box flexGrow={1} bgcolor='darkblue' width='50%' border={5} borderRadius={10} borderColor='turquoise' p={7} mt={-12} display='flex' justifyContent='center' alignItems='center' flexWrap='wrap'>
                    <Box
                        pb={2}
                        display='flex'
                        sx={{ flexBasis: { xs: '100%', sm: '100%', md: '50%', lg: '50%', xl: '50%' } }}
                        justifyContent='center' alignItems='center'>
                        <Button variant='outlined' sx={{ border: 3, borderRadius: 10, p: 2 }} style={{ borderColor: 'turquoise' }}
                            onClick={() => setDrawerOpen(true)}
                        >
                            <Typography textAlign='center' variant="h5" color='white'>Contact Me</Typography></Button>
                    </Box>
                    <Box pb={2} sx={{ flexBasis: { xs: '100%', sm: '100%', md: '50%', lg: '50%', xl: '50%' } }}
                        display='flex' justifyContent='center' alignItems='center'>
                        <Button variant='outlined' sx={{ border: 3, borderRadius: 10, p: 2 }} style={{ borderColor: 'turquoise' }} onClick={DownloadResume}>
                            <Typography color='white' variant='h5'>Download Resume</Typography>
                        </Button>
                    </Box>
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
                        <Button onClick={handleHome}>
                            <img src={RichLogoBlack} alt="My Image" height={150} />
                        </Button>
                    </Stack>

                </Box>
            </Box >
        </Box>
    )
}
export default ContactPage