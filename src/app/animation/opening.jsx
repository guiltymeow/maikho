"use client";
import { useState, useEffect, useRef } from "react";

export default function Opening({ onLoadingComplete, onShrinkComplete, setCirclePosition }) {
    const [progress, setProgress] = useState(1);
    const [isAnimating, setIsAnimating] = useState(false);
    const [shrinkCircle, setShrinkCircle] = useState(false); // For shrinking the circle
    const circleRef = useRef(null);

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
            // After loading is completed, shrink and move the circle to the mouse position
            setTimeout(() => {
                onShrinkComplete(); // Mark shrinking as complete
                setCirclePosition({ x: window.innerWidth / 2, y: window.innerHeight / 2 }); // Center of the screen first
                onLoadingComplete(); // Indicate loading is complete
            }, 1000); // Delay for smooth transition
        }
    }, [isAnimating, shrinkCircle, setCirclePosition, onLoadingComplete, onShrinkComplete]);

    return (
        <div className="loading-screen">
            <div ref={circleRef} className={`circle-container ${shrinkCircle ? "shrink" : ""}`}>
                <svg className="circle" width="500" height="500" viewBox="0 0 200 200">
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
                    <h1 className="text-white font-regular text-[50px] font-cinzel opacity-100">MAIKHO AMANTE</h1>
                    <p className="text-white font-regular text-[20px] font-cinzel opacity-100">{progress}/ 100</p>
                </div>
            </div>

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
