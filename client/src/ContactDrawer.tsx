import { Button, Drawer, TextField, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React, { useContext, useEffect, useState } from 'react'
import RichLogoBlack from './assets/logo_white.png'
import PhoneIcon from '@mui/icons-material/Phone';
import { AppContext } from './App';
import { motion } from 'framer-motion';


const ContactDrawer = () => {
    const { drawerOpen, setDrawerOpen } = useContext(AppContext)

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [sent, setSent] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, targetVar: React.Dispatch<React.SetStateAction<string>>) => {
        targetVar(e.target.value)
    }

    const handleSubmit = () => {
        try {
            fetch('/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, message })
            }).then(res => res.json())
        } catch (err) {
            console.log(err)
        }
        setName('')
        setEmail('')
        setMessage('')
        setSent(true)
        setTimeout(() => {
            setSent(false)
            setDrawerOpen(false)
        }, 2000)
    }
    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i: number) => {
            const delay = 1 + i * 0.5;
            return {
                pathLength: 1,
                opacity: 1,
                transition: {
                    pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
                    opacity: { delay, duration: 0.01 }
                }
            };
        }
    };

    return (
        <Drawer anchor='bottom' open={drawerOpen} onClose={() => setDrawerOpen(false)}>
            <Stack width='100%' justifyContent='center' alignItems='center' pt={2} pb={2}>
                <Typography variant='h2'>Send me a Message</Typography>
                {sent ? (
                    <Box height={'30vh'} alignItems={'center'} justifyContent={'center'} display={'flex'} flexDirection={'column'}>
                        <svg viewBox="0 0 53.19 53.19" height={'10vh'}>
                            <g>
                                <motion.circle
                                    stroke="#51e051"
                                    strokeWidth={3}
                                    fill="transparent"
                                    cx={26.59}
                                    cy={26.59}
                                    r={24}
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                />
                                <motion.path
                                    stroke="#51e051"
                                    strokeWidth={3}
                                    strokeLinecap="round"
                                    fill="transparent"
                                    d="M12.29 26.59l10.98 10.42 17.49-18.23"
                                    initial={{ opacity: 0, pathLength: 0 }}
                                    animate={{ opacity: 1, pathLength: 1 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                />
                            </g>
                        </svg>
                        <Typography variant='h5' textAlign={'center'} color={'#51e051'}>
                            Sent
                        </Typography>
                    </Box>

                ) :
                    (
                        <Box height='30vh' width='100%' justifyContent='center' alignItems='center' display='flex' flexDirection='column' >
                            <Stack direction='row' justifyContent='space-between' width='30%'>
                                <TextField label="Name" variant="outlined" fullWidth onChange={(e) => handleChange(e, setName)} />
                                <TextField label="Email" variant="outlined" fullWidth onChange={(e) => handleChange(e, setEmail)} />
                            </Stack>
                            <Box width='30%'>
                                <TextField label="Message" variant="outlined" fullWidth multiline minRows={5} onChange={(e) => handleChange(e, setMessage)} />
                            </Box>
                            <Button variant='contained' style={{ width: '30%', borderRadius: 6 }} onClick={handleSubmit}>Submit</Button>
                        </Box>
                    )}
                <Box display='flex' flexDirection='row' width='50%' justifyContent={'center'} alignItems={'center'}>
                    <PhoneIcon />
                    <Typography variant='h6'>757-752-7462</Typography>
                    <img src={RichLogoBlack} alt="My Image" height={75} />
                </Box>
            </Stack >

        </Drawer >
    )
}

export default ContactDrawer
