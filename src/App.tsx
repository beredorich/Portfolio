import React, { useEffect, useRef } from 'react';
import { Box, Button, Typography, colors } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import AnimatedBox from './AnimatedBox';
import ExperiencePage from './ExperiencePage';
import ProjectsPage from './ProjectsPage';
import ContactPage from './ContactPage';
import LandingPage from './LandingPage';
import AboutPage from './AboutPage';
import SkillsPage from './SkillsPage';
import NavBar from './NavBar';

const theme = createTheme({
  palette: {
    primary: {
      main: colors.blue[500],
    },
    secondary: {
      main: '#FFFFF',
    },
  },
  typography: {
    fontFamily: 'Rubik',
  },
});


function App() {

  const contactRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);

  return (
    <ThemeProvider theme={theme}>

      <Box
        sx={{
          scrollSnapType: 'y proximity',
          overflowY: 'scroll',
          scrollBehavior: 'smooth',
          height: '100vh',
          color: 'primary.main',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          minWidth: '375px'
        }}
      >
        <NavBar
          homeRef={homeRef}
          aboutRef={aboutRef}
          experienceRef={experienceRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
        />
        <LandingPage homeRef={homeRef} />
        <AboutPage aboutRef={aboutRef} />
        <SkillsPage />
        <ExperiencePage experienceRef={experienceRef} />
        <Box minHeight={200}>

        </Box>
        {/* <ProjectsPage projectsRef={projectsRef} /> */}
        <ContactPage contactRef={contactRef} />

      </Box>
    </ThemeProvider>
  );
}

export default App;


