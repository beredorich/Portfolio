import React, { useEffect, useRef } from 'react';
import { Box, colors } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import ExperiencePage from './ExperiencePage';
import ProjectsPage from './ProjectsPage';
import ContactPage from './ContactPage';
import LandingPage from './LandingPage';
import AboutPage from './AboutPage';
import SkillsPage from './SkillsPage';
import NavBar from './NavBar';
import { stagger, useAnimate, useInView } from 'framer-motion';

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

  const [scope, animate] = useAnimate()
  const isInView = useInView(scope)

  useEffect(() => {
    if (isInView) {
      const enterAnimation = async () => {
        await animate(scope.current, { opacity: 1 })
        await animate("div", { opacity: [0.1, 1], x: [-100, 0] }, { delay: stagger(0.1), duration: 0.5 })
      }
      enterAnimation()
    }
  }, [isInView]);

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
          minWidth: '0',
          overflowX: 'hidden',
          touchAction: 'pan-y',
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
        <Box minHeight={200} bgcolor='primary.main' width='100%'>

        </Box>
        {/* <ProjectsPage projectsRef={projectsRef} /> */}
        <ContactPage contactRef={contactRef} homeRef={homeRef} />
      </Box>
    </ThemeProvider>
  );
}

export default App;


