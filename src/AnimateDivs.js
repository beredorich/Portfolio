import React, { useEffect } from 'react'
import { stagger, useInView } from 'framer-motion'

const AnimateDivs = (scope, animate) => {
    const isInView = useInView(scope)
    useEffect(() => {
        if (isInView) {
            const enterAnimation = async () => {
                await animate(scope.current, { opacity: [0.1, 1], x: [-50, 0] }, { delay: stagger(0.1), duration: 0.25 })
            }
            enterAnimation()
        }
    }, [isInView]);
}

export default AnimateDivs