import React from 'react';
import { Box, Typography } from '@mui/material';

const SinglePage: React.FC<{ title: string, bgColor: string }> = ({ title, bgColor }) => {

  return (
    <Box
      sx={{
        backgroundColor: bgColor,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        minHeight: '100vh',
        width: '100%',
        scrollSnapAlign: 'start',
        scrollBehavior: 'smooth',
        scrollSnapStop: 'always',
        overscrollBehavior: 'none',
      }}
    >
      <Typography fontFamily="sans-serif" variant="h3" color="white">
        {title}
      </Typography>
    </Box>
  );
};

function App() {
  return (
    <Box
      sx={{
        scrollSnapType: 'y mandatory',
        overflowY: 'scroll',
        scrollBehavior: 'smooth',
        height: '100vh',

      }}
    >
      <SinglePage title="Page 1" bgColor="rgb(36, 164, 138)" />
      <SinglePage title="Page 2" bgColor="rgb(211,79,79)" />
      <SinglePage title="Page 3" bgColor="rgb(67,91,175)" />
      <SinglePage title="Page 4" bgColor="rgb(255, 193, 7)" />
      <Typography>TEST2</Typography>
    </Box>
  );
}

export default App;


