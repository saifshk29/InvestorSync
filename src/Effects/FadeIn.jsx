import React from "react";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

export default function FadeIn({ children, duration = 0, className }) {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setIsVisible(true);
                    }, duration);
                }
            },
            {
                threshold: 0.3, // Trigger when 10% of element is visible
            }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [duration]);

    return (
        <div
            ref={elementRef}
            className={clsx(
                "transition-all duration-3000 ease-out",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
                className
            )}
        >
            {children}
        </div>
    );
}
