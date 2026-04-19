'use client';

import { cn } from '@/lib/utils';
import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';

const MotionLink = motion(Link);

export function GlowButton({
    href,
    onClick,
    variant = 'primary',
    children,
    className,
    type = 'button',
}) {
    const reduce = useReducedMotion();
    const motionProps = reduce
        ? {}
        : { whileHover: { scale: 1.05 }, whileTap: { scale: 0.97 } };

    const base =
        'inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/80';

    const styles =
        variant === 'primary'
            ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-[rgba(40,66,154,0.35)]'
            : 'border border-secondary text-secondary hover:bg-secondary/10';

    const cls = cn(base, styles, className);

    if (href) {
        return (
            <MotionLink href={href} className={cls} {...motionProps}>
                {children}
            </MotionLink>
        );
    }

    return (
        <motion.button
            type={type}
            onClick={onClick}
            className={cls}
            {...motionProps}
        >
            {children}
        </motion.button>
    );
}
