import React from 'react';
import { Box } from '@mui/material';


const SinglePage: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <Box
            sx={{

                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                minHeight: '100vh',
                width: '100%',
                scrollSnapAlign: 'start',
                scrollBehavior: 'smooth',
                scrollSnapStop: 'always',
                overscrollBehavior: 'none',
                height: '100vh',
            }}
        >
            {children}
        </Box>
    );
};

export default SinglePage