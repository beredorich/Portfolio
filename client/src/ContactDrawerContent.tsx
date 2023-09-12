import { Button, TextField, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'
import RichLogoBlack from './assets/logo_white.png'
import PhoneIcon from '@mui/icons-material/Phone';


const ContactDrawerContent = () => {
    return (
        <Stack width='100%' justifyContent='center' alignItems='center' pt={2} pb={2}>
            <Typography variant='h2'>Send me a Message</Typography>
            <Stack direction='row' justifyContent='space-between' width='30%'>
                <TextField label="Name" variant="outlined" fullWidth />
                <TextField label="Email" variant="outlined" fullWidth />
            </Stack>
            <Box width='30%'>
                <TextField label="Message" variant="outlined" fullWidth multiline minRows={5} />
            </Box>
            <Button variant='contained' style={{ width: '30%', borderRadius: 6 }}>Submit</Button>
            <Box display='flex' flexDirection='row' width='50%' justifyContent={'center'} alignItems={'center'}>
                <PhoneIcon />
                <Typography variant='h6'>757-752-7462</Typography>
                <img src={RichLogoBlack} alt="My Image" height={75} />
            </Box>
        </Stack >
    )
}

export default ContactDrawerContent
