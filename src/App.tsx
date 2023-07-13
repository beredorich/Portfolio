import React, { useEffect, useRef } from 'react';
import { Box, Typography, colors } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import SinglePage from './SinglePage';
import AnimatedBox from './AnimatedBox';
import ExperiencePage from './ExperiencePage';
import ProjectsPage from './ProjectsPage';
import ContactPage from './ContactPage';
import LandingPage from './LandingPage';
import AboutPage from './AboutPage';
import SkillsPage from './SkillsPage';

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
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          scrollSnapType: 'y proximity',
          overflowY: 'scroll',
          scrollBehavior: 'smooth',
          height: '100vh',
          // bgcolor: 'primary.main',
          color: 'primary.main',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <LandingPage />
        <AboutPage />
        <SkillsPage />
        <ExperiencePage />
        <ProjectsPage />
        <ContactPage />
      </Box>
    </ThemeProvider>
  );
}

export default App;


