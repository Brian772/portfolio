import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function CustomScrollbar() {
    const thumbRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const isDraggingRef = useRef(false);

    useEffect(() => {
        if (!thumbRef.current || !trackRef.current) return;

        const track = trackRef.current;
        const thumb = thumbRef.current;

        gsap.set(track, { opacity: 0 });

        const showScrollbar = () => {
            gsap.killTweensOf(track);
            gsap.to(track, { opacity: 1, duration: 0.25, ease: 'power2.out' });

            if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);

            hideTimeoutRef.current = setTimeout(() => {
                if (!isDraggingRef.current) {
                    gsap.to(track, {
                        opacity: 0,
                        duration: 0.6,
                        ease: 'power2.out',
                    });
                }
            }, 3000);
        };

        const updateThumb = () => {
            const scrollTop = window.scrollY;
            const docHeight =
                document.documentElement.scrollHeight - window.innerHeight;
            const progress = docHeight > 0 ? scrollTop / docHeight : 0;

            const trackHeight = track.clientHeight;
            const thumbHeight = thumb.offsetHeight;
            const maxThumbTop = trackHeight - thumbHeight;

            gsap.to(thumb, {
                y: progress * maxThumbTop,
                duration: 0.1,
                ease: 'none',
                overwrite: 'auto',
            });

            showScrollbar();
        };

        window.addEventListener('scroll', updateThumb, { passive: true });
        updateThumb();

        return () => {
            window.removeEventListener('scroll', updateThumb);
            if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
        };
    }, []);

    const handleDrag = () => {
        isDraggingRef.current = true;
        gsap.killTweensOf(trackRef.current);
        gsap.to(trackRef.current, { opacity: 1, duration: 0.2 });

        const handleMouseMove = (moveEvent: MouseEvent) => {
            if (!trackRef.current) return;
            const docHeight =
                document.documentElement.scrollHeight - window.innerHeight;
            const trackHeight = trackRef.current.clientHeight;
            const progress = Math.min(
                Math.max(moveEvent.clientY / trackHeight, 0),
                1,
            );
            window.scrollTo({ top: progress * docHeight });
        };

        const handleMouseUp = () => {
            isDraggingRef.current = false;
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
            gsap.to(trackRef.current, {
                opacity: 0,
                duration: 0.6,
                delay: 0.9,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
    };

    return (
        <div
            ref={trackRef}
            className="fixed top-1/2 right-2 z-100 hidden h-40 w-3 -translate-y-1/2 justify-center py-2 md:flex"
        >
            <div className="relative h-full w-2 rounded-full bg-theme-border-subtle">
                <div
                    ref={thumbRef}
                    onMouseDown={handleDrag}
                    className="absolute left-1/2 h-10 w-2 -translate-x-1/2 cursor-grab rounded-full bg-theme-nav-active active:cursor-grabbing"
                />
            </div>
        </div>
    );
}
