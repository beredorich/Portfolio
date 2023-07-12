import { Box, Card, Typography } from '@mui/material'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import React from 'react'
import AnimatedBox from './AnimatedBox'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

const TimeLineComponent: React.FC<{ color: string, childrenLeft: React.ReactNode, childrenRight: React.ReactNode }> = ({ color, childrenLeft, childrenRight }) => {
    return (
        <TimelineItem >
            <TimelineOppositeContent color={color}>
                {childrenLeft}
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector sx={{ height: '200px' }} />
            </TimelineSeparator>
            <TimelineContent>
                {childrenRight}
            </TimelineContent>
        </TimelineItem>
    )
}



const ExperiencePage: React.FC = () => {

    return (

        <Box sx={{ display: 'flex', flexDirection: 'column', width: '80%', flexGrow: 1, mt: -10 }}>
            <Card sx={{ flex: 1, width: '100%' }}>
                <AnimatedBox animateDirection='xRight'>
                    <Typography sx={{ m: 2 }} variant="h3">Experience</Typography>
                </AnimatedBox>
                <Timeline position="alternate">
                    <TimeLineComponent
                        color='text.secondary'
                        childrenLeft={
                            <AnimatedBox animateDirection={'yUp'}>
                                <Typography>Job1</Typography>
                            </AnimatedBox>
                        }
                        childrenRight={
                            <AnimatedBox animateDirection={'yUp'}>
                                <Typography>Job1</Typography>
                            </AnimatedBox>
                        }
                    />
                    <TimeLineComponent
                        color='text.secondary'
                        childrenLeft={
                            <AnimatedBox animateDirection={'yUp'}>
                                <Typography>Job2</Typography>
                            </AnimatedBox>
                        }
                        childrenRight={
                            <AnimatedBox animateDirection={'yUp'}>
                                <Typography>Job2</Typography>
                            </AnimatedBox>
                        }
                    />
                    <TimeLineComponent
                        color='text.secondary'
                        childrenLeft={
                            <AnimatedBox animateDirection={'yUp'}>
                                <Typography>Job2</Typography>
                            </AnimatedBox>
                        }
                        childrenRight={
                            <AnimatedBox animateDirection={'yUp'}>
                                <Typography>Job2</Typography>
                            </AnimatedBox>
                        }
                    />
                    <TimeLineComponent
                        color='text.secondary'
                        childrenLeft={
                            <AnimatedBox animateDirection={'yUp'}>
                                <Typography>Job3</Typography>
                            </AnimatedBox>
                        }
                        childrenRight={
                            <AnimatedBox animateDirection={'yUp'}>
                                <Typography>Job3</Typography>
                            </AnimatedBox>
                        }
                    />

                </Timeline>
            </Card >
        </Box>

    )
}

export default ExperiencePage