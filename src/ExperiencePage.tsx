import { Box, Card, Stack, Typography } from '@mui/material'
import React from 'react'
import AnimatedBox from './AnimatedBox'
import mantech from './assets/mantech.png'
import army from './assets/army.png'
import caci from './assets/caci.png'
import ecocar from './assets/ecocar.png'

const JobBox: React.FC<{ left: string | Array<string>, right: string | Array<string>, wrap: string, title: string, timeline: string, bgcolor: string }> = ({ left, right, wrap, title, timeline, bgcolor }) => {

    const BoxComponent: React.FC<{ boxContent: string | Array<string>, title: string, timeline: string }> = ({ boxContent: boxContent, title, timeline }) => {
        return (
            <Box display='flex' flexDirection='row' justifyContent='center' alignItems='center'
                flexBasis={{ xs: '100%', sm: '100%', md: '50%', lg: '50%', xl: '50%' }}
            >
                {
                    typeof boxContent === 'string' ?
                        <img src={boxContent} height='auto' width='300' />
                        :
                        <Box display='flex' flexDirection='column'>
                            <Card sx={{ m: 2, p: 2 }}>
                                <Box flexDirection='row' display='flex' justifyContent='space-between' alignItems='center'>
                                    <Typography variant='h5'>{title}</Typography>
                                    <Typography variant='h6'>{timeline}</Typography>
                                </Box>
                                {boxContent.map(item => {
                                    return (
                                        <Typography>-{item}</Typography>
                                    )
                                })}
                            </Card>
                        </Box>
                }
            </Box>
        )
    }

    return (
        <Box display='flex' flexDirection='row' width='100%' flexWrap={wrap === 'wrap' ? 'wrap' : 'wrap-reverse'} justifyContent='center' alignItems='center' bgcolor={bgcolor}>
            <BoxComponent boxContent={left} title={title} timeline={timeline} />
            <BoxComponent boxContent={right} title={title} timeline={timeline} />
        </Box>
    )
}

const ExperiencePage: React.FC = () => {

    return (

        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', flexGrow: 1, justifyContent: 'center', alignItems: 'center', mt: 10, gap: 2 }}>
            <Typography variant='h2' sx={{ mb: 5 }}>Experience</Typography>
            <JobBox left={[
                'Automated Installs of Quarterly Patches using PowerShell Scripting',
                'Created and deployed Website using MERN stack (MongoDB, Express, React Typescript, Node) to modernize team processes and maintain online databases.',
                'Provided the essential software support for the Tactical network components including the configuration of the hardware devices and virtual machines, testing new software, and designing the structure of the network.',
                'Created automation tools using Python to improve team workflow and efficiency.',
            ]} right={mantech} wrap='reverse-wrap' timeline='January 2022 - Present' title='Software Engineer' bgcolor='white' />
            <JobBox left={army} right={[
                'Deploys Battalion radio network for field environments including antennas and radios.',
                'Advisor to the Battalion Commander regarding all matters concerning communications and IT.'
            ]} wrap='wrap' timeline='May 2020 - Present' title='Battalion S6 (Signal Officer)' bgcolor='primary.main' />
            <JobBox left={[
                'Interpreted parametric data and descriptions of both mechanical, electronic, and radio frequency capabilities of foreign and domestic RADAR systems to support on-going update of the US Army Apache helicopter RADAR Early Warning System.',
                'Programed 20+ radar simulations in a custom-made MATLAB/C++ based language (Simulation Modeling Framework) to support 8+ regional needs for the Apache Early Warning System.',
                'Automated 50+ RADAR simulations using VBA (visual basic for applications) to streamline MDS (mission data set) development for the Early Warning System to meet quarterly deadlines.',
                'Generated 50+ Engineering reports of RADAR simulation builds to catalog engineering decisions.',
                'Developed test plans under strict customer requirements, executed testing to support all test phases, perform test analysis, troubleshoot errors, develop test reports for 6 Apache systems',
                'Reviewed and tested 30+ peer project simulations to pass strict guidelines.',
                'Selected to develop Simulation Modeling Framework training out of a team 40+. Developed RADAR coding training to teach 30+ employees to program RADAR simulations.',
                'Developed RADAR coding training to teach 30+ employees to program RADAR simulations.'
            ]} right={caci} wrap='reverse-wrap' timeline='January 2021 - January 2022' title='Radio Frequency Engineer' bgcolor='white' />
            <JobBox left={ecocar} right={[
                'Administered scrum process, including sprint planning and reviews, to develop Autonomous car for annual competition under strict budget and customer deliverables.',
                'Improved signal processing algorithm, using MATLAB, to improve radar testing.',
                'Performed lidar and radar testing using oscilloscopes and spectrum analyzer.',
            ]} wrap='swrap' timeline='August 2019 - May 2020' title='Electrical Engineer' bgcolor='primary.main' />
        </Box>
    )
}

export default ExperiencePage