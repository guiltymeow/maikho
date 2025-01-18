'use client';
import { useState, useEffect } from "react";

export default function Opening({ onLoadingComplete, onShrinkComplete }) {
    const [progress, setProgress] = useState(1);
    const [isAnimating, setIsAnimating] = useState(false);
    const [shrinkCircle, setShrinkCircle] = useState(false); // For shrinking the circle
    const [circleVisible, setCircleVisible] = useState(true); // To control the visibility of the circle

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval); // Stop when 100% is reached
                    setIsAnimating(true); // Start the animation to move the circle
                    setShrinkCircle(true); // Trigger shrinking of the circle
                    return 100;
                }
                return prev + 1;
            });
        }, 20); // Adjust the speed of the progress

        return () => clearInterval(interval); // Cleanup the interval when component unmounts
    }, []);

    useEffect(() => {
        if (isAnimating && shrinkCircle) {
            // After loading is completed, shrink the circle
            setTimeout(() => {
                setCircleVisible(false); // Hide the circle after shrinking
                onShrinkComplete(); // Mark shrinking as complete
                onLoadingComplete(); // Indicate loading is complete
            }, 1000); // Delay for smooth transition
        }
    }, [isAnimating, shrinkCircle, onLoadingComplete, onShrinkComplete]);

    return (
        <div className="loading-screen">
            {circleVisible && (
                <div className={`circle-container ${shrinkCircle ? "shrink" : ""}`}>
                    <svg className="circle" width="100%" height="100%" viewBox="0 0 200 200">
                        <circle
                            className="circle-bg"
                            cx="100"
                            cy="100"
                            r="90"
                            strokeWidth="0.5"
                            fill="none"
                        />
                        <circle
                            className="circle-progress"
                            cx="100"
                            cy="100"
                            r="90"
                            strokeWidth="1"
                            fill="none"
                            strokeDasharray="565.48" // Circumference of the circle (2 * π * 90)
                            strokeDashoffset={565.48 - (565.48 * progress) / 100} // Dynamically adjust stroke offset
                        />
                    </svg>
                    <div className="circle-content">
                        <h1 className="text-white font-regular text-[50px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-cinzel opacity-100">MAIKHO AMANTE</h1>
                        <p className="text-white font-regular text-[20px] sm:text-[16px] md:text-[20px] lg:text-[24px] font-cinzel opacity-100">{progress}/ 100</p>
                    </div>
                </div>
            )}

            <style jsx>{`
                .loading-screen {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: rgba(0, 0, 0, 1); /* Solid black background */
                    z-index: 1000;
                    transition: all 1s ease; /* Smooth transition when moving the circle */
                }

                .circle-container {
                    position: absolute;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    border-radius: 50%;
                    transition: transform 1s ease, width 2s ease, height 2s ease; /* Slow shrink transition */
                    width: 80vw; /* Circle size relative to viewport width */
                    height: 80vw; /* Circle size relative to viewport height */
                    max-width: 500px; /* Max width for larger screens */
                    max-height: 500px; /* Max height for larger screens */
                }

                .circle {
                    transform: rotate(-90deg); /* Rotate to make animation start from top */
                }

                .circle-bg {
                    stroke: rgba(255, 255, 255, 0.2); /* Faint background circle */
                }

                .circle-progress {
                    stroke: white;
                    stroke-linecap: round;
                    transition: stroke-dashoffset 0.3s ease;
                }

                .circle-content {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    text-align: center;
                }

                /* Slow Shrinking effect */
                .shrink {
                    width: 50px !important;  /* Mouse circle size */
                    height: 50px !important;
                    transition: all 4s ease; /* Slow shrinking transition */
                }
            `}</style>
        </div>
    );
}
