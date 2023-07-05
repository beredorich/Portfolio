import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Box } from '@mui/material';

interface AnimatedBoxProps {
    children: React.ReactNode;
    animateDirection: string;
    height?: string;
    width?: string;
    border?: number;
    flexGrow?: number;
    display?: string;
    flexWrap?: string;
    flexBasis?: string | { [key: string]: string };
    justifyContent?: string;
    alignItems?: string;
    flexDirection?: string;
    position?: string;
    zIndex?: number;
}

const AnimatedBox: React.FC<AnimatedBoxProps> = ({ children, animateDirection, height, width, border, flexGrow, display, flexWrap, flexBasis, justifyContent, alignItems, flexDirection, position, zIndex }) => {
    const ref = useRef(null);
    const isInViewport = useInView(ref);
    const mainControls = useAnimation();
    let initialHidden
    useEffect(() => {
        let variant;
        switch (animateDirection) {
            case 'xLeft':
                variant = isInViewport ? 'visibleXL' : 'hiddenXL';
                initialHidden = 'hiddenXL'
                break;
            case 'xRight':
                variant = isInViewport ? 'visibleXR' : 'hiddenXR';
                initialHidden = 'hiddenXR'
                break;
            case 'yDown':
                variant = isInViewport ? 'visibleYD' : 'hiddenYD';
                initialHidden = 'hiddenYD'
                break;
            case 'yUp':
                variant = isInViewport ? 'visibleYU' : 'hiddenYU';
                initialHidden = 'hiddenYU'
                break;
            default:
                variant = 'hidden';
                initialHidden = 'hiddenYU'
                break;
        }
        mainControls.set(initialHidden);
        mainControls.start(variant);

    }, [isInViewport]);



    return (
        <Box
            height={height}
            width={width}
            component={motion.div}
            ref={ref}
            sx={{ border: border, flexWrap: flexWrap === 'wrap' ? 'wrap' : 'nowrap' }}
            flexBasis={flexBasis}
            flexGrow={flexGrow}
            flexDirection={flexDirection === 'column' ? 'column' : 'row'}
            display={display}
            justifyContent={justifyContent}
            alignItems={alignItems}
            position={position === 'absolute' ? 'absolute' : 'relative'}
            zIndex={zIndex}

            variants={{
                hiddenYU: { opacity: 0, y: 100 },
                visibleYU: { opacity: 1, y: 0 },
                hiddenYD: { opacity: 0, y: -100 },
                visibleYD: { opacity: 1, y: 0 },
                hiddenXL: { opacity: 0, x: 100 },
                visibleXL: { opacity: 1, x: 0 },
                hiddenXR: { opacity: 0, x: -100 },
                visibleXR: { opacity: 1, x: 0 },
            }}
            initial={initialHidden}
            animate={mainControls}
            transition={{ duration: 0.5 }}
        >
            {children}
        </Box>
    );
};


export default AnimatedBox;
