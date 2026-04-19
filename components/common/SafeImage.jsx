'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const DEFAULT_PHOTO = '/images/placeholder-photo.svg';
const DEFAULT_AVATAR = '/images/placeholder-avatar.svg';

/**
 * Next/Image with a local fallback when `src` is missing or 404s in /public.
 */
export function SafeImage({ src, alt, fallback = DEFAULT_PHOTO, ...props }) {
    const [current, setCurrent] = useState(src);

    useEffect(() => {
        setCurrent(src);
    }, [src]);

    return (
        <Image
            {...props}
            src={current}
            alt={alt}
            onError={() => setCurrent(fallback)}
        />
    );
}

export function SafeAvatarImage(props) {
    return <SafeImage {...props} fallback={DEFAULT_AVATAR} />;
}
