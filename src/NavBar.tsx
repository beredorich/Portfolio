import { Box, Button, Drawer, Stack, AppBar } from '@mui/material';
import { debounce } from 'lodash';
import React, { useEffect, useState } from 'react'
import RichLogo from './assets/logo_clear.png'
import MenuIcon from '@mui/icons-material/Menu';


const NavBar = () => {
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
    return (
        <>
            <AppBar position='sticky'>
                <Stack direction='row' justifyContent='space-between' bgcolor="primary.main" color='white'>
                    <Box borderRadius={6} ml={5}>
                        <img src={RichLogo} alt="My Image" height={70} />
                    </Box>
                    {shrinkMenu ?
                        <>
                            <Button variant="text" sx={{ color: 'white' }} size='medium' onClick={() => setToggleDrawer(true)} style={{ maxHeight: '80px' }}><MenuIcon /></Button>
                            <Drawer anchor='top' open={toggleDrawer} onClose={() => setToggleDrawer(false)}>
                                <Stack direction='column' spacing={2} color='black' justifyContent='center' alignItems='center'>
                                    <Button variant="text" size='medium' style={{ maxHeight: '80px' }}>About</Button>
                                    <Button variant="text" size='medium' style={{ maxHeight: '80px' }}>Skills</Button>
                                    <Button variant="text" size='medium' style={{ maxHeight: '80px' }}>Experiences</Button>
                                    <Button variant="text" size='medium' style={{ maxHeight: '80px' }}>Projects</Button>
                                    <Button variant="text" size='medium' style={{ maxHeight: '80px' }}>Contact</Button>
                                </Stack>
                            </Drawer>
                        </>
                        :
                        <Stack direction='row' sx={{ mr: 5 }} spacing={2} color='black'>
                            <Button variant="text" sx={{ color: 'white' }} size='medium' style={{ maxHeight: '80px' }}>About</Button>
                            <Button variant="text" sx={{ color: 'white' }} size='medium' style={{ maxHeight: '80px' }}>Skills</Button>
                            <Button variant="text" sx={{ color: 'white' }} size='medium' style={{ maxHeight: '80px' }}>Experiences</Button>
                            <Button variant="text" sx={{ color: 'white' }} size='medium' style={{ maxHeight: '80px' }}>Projects</Button>
                            <Button variant="text" sx={{ color: 'white' }} size='medium' style={{ maxHeight: '80px' }}>Contact</Button>
                        </Stack>
                    }
                </Stack>
            </AppBar>
        </>

    )
}

export default NavBar