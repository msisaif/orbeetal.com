'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';

/**
 * Reliable in-view detection: `whileInView` alone can leave content at opacity 0
 * when intersection thresholds are not met. `useInView` + `animate` avoids that.
 */
export const motionViewport = {
    once: true,
    amount: 0.15,
    margin: '0px 0px 120px 0px',
};

/**
 * Same intersection options as ScrollReveal, for replacing unreliable `whileInView`
 * on staggered `motion` trees (variant `hidden` → `show`).
 */
export function useRevealInView() {
    const ref = useRef(null);
    const inView = useInView(ref, motionViewport);
    return { ref, inView };
}

export function ScrollReveal({ children, className, delay = 0 }) {
    const reduce = useReducedMotion();
    const ref = useRef(null);
    const inView = useInView(ref, motionViewport);

    if (reduce) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ y: 40 }}
            animate={inView ? { y: 0 } : { y: 40 }}
            transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    );
}
