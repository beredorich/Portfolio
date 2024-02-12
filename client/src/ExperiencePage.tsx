import { Box, Card, Typography } from '@mui/material'
import React, { MutableRefObject, useEffect } from 'react'
import onyx_mantech from './assets/onyx_mantech.png'
import army from './assets/army.png'
import caci from './assets/caci.png'
import ecocar from './assets/ecocar.png'
import { stagger, useAnimate, useInView } from 'framer-motion'

const JobBox: React.FC<{ left: string | Array<string>, right: string | Array<string>, wrap: string, title: string, timeline: string, bgcolor?: string }> = ({ left, right, wrap, title, timeline, bgcolor }) => {
    const [scope, animate] = useAnimate()
    const isInView = useInView(scope)
    useEffect(() => {
        if (isInView) {
            const enterAnimation = async () => {
                await animate("div", { opacity: [0.1, 1], x: [-10, 0] }, { delay: stagger(0.1), duration: 0.5 })
            }
            enterAnimation()
        }
    }, [isInView]);
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
                            <Card sx={{ m: 2, p: 2, border: 3, borderColor: 'turquoise', borderRadius: 10 }}>
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
        <Box ref={scope} display='flex' flexDirection='row' width='100%' flexWrap={wrap === 'wrap' ? 'wrap' : 'wrap-reverse'} justifyContent='center' alignItems='center' bgcolor={bgcolor}>
            <BoxComponent boxContent={left} title={title} timeline={timeline} />
            <BoxComponent boxContent={right} title={title} timeline={timeline} />
        </Box>
    )
}


const ExperiencePage: React.FC<{ experienceRef: MutableRefObject<HTMLDivElement | null> }> = ({ experienceRef }) => {

    return (

        <Box ref={experienceRef} sx={{ bgcolor: 'primary.main', display: 'flex', flexDirection: 'column', width: '100%', flexGrow: 1, justifyContent: 'center', alignItems: 'center', gap: 2 }}>
            <Typography variant='h2' sx={{ mb: 5, mt: 10 }} color='white'>Experience</Typography>
            <JobBox left={[
                'Created, designed, and deployed patch management Website using MERN stack (MongoDB, Express, React Typescript, Node) to modernize team processes and maintain serverless databases.',
                'Designed custom end user interface components using React Redux and Material UI.',
                'Designed, implemented, and maintained RESTful APIs using Node JS and Java Spring boot, ensuring seamless communication between server, Mongo database and client systems. ',
                'Led sprint and code reviews in agile development processes using Azure services, ensuring timely feedback, identifying areas for improvement, and fostering a collaborative team environment.',
                'Implemented automation web tools utilizing the MERN stack to enhance team workflow and efficiency, with successful deployment on Azure Cloud.',
                'Spearheaded testing of full-stack applications within Docker containers and virtual machines, ensuring seamless integration, scalability, and adherence to project specifications.',
                'Automated Installs of Quarterly Patches using PowerShell and Python Scripting.',
                'Provided the essential software support for the Tactical network components including the configuration of the hardware devices, virtual machines, and testing new software.',
            ]} right={onyx_mantech} wrap='reverse-wrap' timeline='January 2022 - Present' title='Software Engineer' />
            <JobBox left={army} right={[
                'Deploys Battalion radio network for field environments including antennas and radios.',
                'Advisor to the Battalion Commander regarding all matters concerning communications and IT.'
            ]} wrap='wrap' timeline='May 2020 - Present' title='Information Network Engineer Officer ' />
            <JobBox left={[
                'Interpreted parametric data and descriptions of both mechanical, electronic, and radio frequency capabilities of foreign and domestic RADAR systems to support on-going update of the US Army Apache helicopter RADAR Early Warning System.',
                'Programed 20+ radar simulations in a custom-made MATLAB/C++ based language (Simulation Modeling Framework) to support 8+ regional needs for the Apache Early Warning System.',
                'Automated 50+ RADAR simulations using VBA (visual basic for applications) to streamline MDS (mission data set) development for the Early Warning System to meet quarterly deadlines.',
                'Generated 50+ Engineering reports of RADAR simulation builds to catalog engineering decisions.',
                'Developed test plans under strict customer requirements, executed testing to support all test phases, perform test analysis, troubleshoot errors, develop test reports for 6 Apache systems',
                'Reviewed and tested 30+ peer project simulations to pass strict guidelines.',
                'Selected to develop Simulation Modeling Framework training out of a team 40+. Developed RADAR coding training to teach 30+ employees to program RADAR simulations.',
                'Developed RADAR coding training to teach 30+ employees to program RADAR simulations.'
            ]} right={caci} wrap='reverse-wrap' timeline='January 2021 - January 2022' title='Radio Frequency Engineer' />
            <JobBox left={ecocar} right={[
                'Administered scrum process, including sprint planning and reviews, to develop Autonomous car for annual competition under strict budget and customer deliverables.',
                'Improved signal processing algorithm, using MATLAB, to improve radar testing.',
                'Performed lidar and radar testing using oscilloscopes and spectrum analyzer.',
            ]} wrap='wrap' timeline='August 2019 - May 2020' title='Electrical Engineer' />
        </Box>
    )
}

export default ExperiencePage