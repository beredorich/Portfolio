import React, { useEffect, useRef } from 'react';
import { Box, Typography, colors } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import SinglePage from './SinglePage';
import AnimatedBox from './AnimatedBox';
import ExperiencePage from './ExperiencePage';
import ProjectsPage from './ProjectsPage';
import ContactPage from './ContactPage';
import LandingPage from './LandingPage';

const theme = createTheme({
  palette: {
    primary: {
      main: colors.blue[500],
    },
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
          bgcolor: 'primary.main',
          color: 'white',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <LandingPage />
        <ExperiencePage />
        <ProjectsPage />
        <ContactPage />
      </Box>
    </ThemeProvider>
  );
}

export default App;


