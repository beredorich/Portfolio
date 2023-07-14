import { Box, Typography } from '@mui/material'
import React from 'react'
import AnimatedBox from './AnimatedBox'
import apiImg from './assets/skills/api.png'


const JobBox: React.FC<{ left: string | Array<string>, right: string | Array<string>, wrap: string }> = ({ left, right, wrap }) => {

    const BoxComponent: React.FC<{ boxContent: string | Array<string> }> = ({ boxContent: boxContent }) => {
        return (
            <Box display='flex' flexDirection='row'
                flexBasis={{ xs: '100%', sm: '100%', md: '50%', lg: '50%', xl: '50%' }}
            >
                {
                    typeof boxContent === 'string' ?
                        <img src={boxContent} />
                        :
                        <Box display='flex' flexDirection='column'>
                            {boxContent.map(item => {
                                return (
                                    <Typography>-{item}</Typography>
                                )
                            })}
                        </Box>
                }
            </Box>
        )
    }

    return (
        <Box display='flex' flexDirection='row' width='100%' flexWrap={wrap === 'wrap' ? 'wrap' : 'wrap-reverse'}>
            <BoxComponent boxContent={left} />
            <BoxComponent boxContent={right} />
        </Box>
    )
}

const ExperiencePage: React.FC = () => {

    return (

        <Box sx={{ display: 'flex', flexDirection: 'column', width: '80%', flexGrow: 1, justifyContent: 'center', alignItems: 'center', mt: 10 }}>
            <Typography variant='h2' sx={{ mb: 5 }}>Experience</Typography>
            <JobBox left={['Software Engineer Intern', 'CACI International Inc.']} right={apiImg} wrap='wrap' />
        </Box>
    )
}

export default ExperiencePage