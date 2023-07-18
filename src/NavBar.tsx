import { Box, Button, Drawer, Stack, AppBar, Typography } from '@mui/material';
import { debounce } from 'lodash';
import React, { MutableRefObject, useEffect, useState } from 'react'
import RichLogo from './assets/logo_clear.png'
import RichLogoBlack from './assets/logo_white.png'
import MenuIcon from '@mui/icons-material/Menu';

type NavBarProps = {
    homeRef: MutableRefObject<HTMLDivElement | null>
    aboutRef: MutableRefObject<HTMLDivElement | null>
    experienceRef: MutableRefObject<HTMLDivElement | null>
    projectsRef: MutableRefObject<HTMLDivElement | null>
    contactRef: MutableRefObject<HTMLDivElement | null>
}


const NavBar: React.FC<NavBarProps> = ({ homeRef, contactRef, aboutRef, projectsRef, experienceRef }) => {
    useEffect(() => {
        const handleResize = debounce(() => {
            if (window.innerWidth < 600) {
                setShrinkMenu(true)
            } else {
                setShrinkMenu(false)
            }
        }, 500);

        window.addEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (window.innerWidth < 600) {
            setShrinkMenu(true)
        }
    }, []);
    const [shrinkMenu, setShrinkMenu] = useState(false);
    const [toggleDrawer, setToggleDrawer] = useState(false);

    const handleClick = (ref: React.RefObject<HTMLElement>) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <AppBar position='sticky'>
                <Stack direction='row' justifyContent='space-between' bgcolor="primary.main" color='white'>
                    <Box borderRadius={6} ml={5}>
                        <Button onClick={() => handleClick(homeRef)}><img src={RichLogo} height={70} /></Button>
                    </Box>
                    {shrinkMenu ?
                        <>
                            <Button variant="text" sx={{ color: 'white' }} size='medium' onClick={() => setToggleDrawer(true)} style={{ maxHeight: '80px' }}><MenuIcon /></Button>
                            <Drawer anchor='top' open={toggleDrawer} onClose={() => setToggleDrawer(false)}>
                                <Stack direction='column' spacing={2} color='black' justifyContent='center' alignItems='center' p={2}>
                                    <Button onClick={() => console.log('go cowboys')}><img src={RichLogoBlack} height={80} /></Button>
                                    <Button variant="text" sx={{ color: 'primary.main' }} size='medium' style={{ maxHeight: '80px' }} onClick={() => handleClick(aboutRef)}>About</Button>
                                    <Button variant="text" sx={{ color: 'primary.main' }} size='medium' style={{ maxHeight: '80px' }} onClick={() => handleClick(experienceRef)}>Experiences</Button>
                                    <Button variant="text" sx={{ color: 'primary.main' }} size='medium' style={{ maxHeight: '80px' }} onClick={() => handleClick(projectsRef)}>Projects</Button>
                                    <Button variant="text" sx={{ color: 'primary.main' }} size='medium' style={{ maxHeight: '80px' }} onClick={() => handleClick(contactRef)}>Contact</Button>
                                </Stack>
                            </Drawer>
                        </>
                        :
                        <Stack direction='row' sx={{ mr: 5 }} spacing={2} color='black'>
                            <Button variant="text" sx={{ color: 'white' }} size='medium' style={{ maxHeight: '80px' }} onClick={() => handleClick(aboutRef)}>About</Button>
                            <Button variant="text" sx={{ color: 'white' }} size='medium' style={{ maxHeight: '80px' }} onClick={() => handleClick(experienceRef)}>Experiences</Button>
                            <Button variant="text" sx={{ color: 'white' }} size='medium' style={{ maxHeight: '80px' }} onClick={() => handleClick(projectsRef)}>Projects</Button>
                            <Button variant="text" sx={{ color: 'white' }} size='medium' style={{ maxHeight: '80px' }} onClick={() => handleClick(contactRef)}>Contact</Button>
                        </Stack>
                    }
                </Stack>
            </AppBar>
        </>

    )
}

export default NavBar