// MyFooter.jsx
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

const MyFooter = () => {
    const [rotation, setRotation] = useState(0);
    const previousScrollPosition = useRef(0); // Track scroll position for rotation

    const circleRef = useRef(null);

    const styles = {
        circleContainer: {
            position: "relative",
            display: "inline-block",
            width: "140px", // Adjust the circle size
            height: "140px",
            margin: "auto",
        },
        circle: {
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            backgroundColor: "black",
            position: "absolute",
            top: 0,
            left: 0,
        },
        circularText: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "10px",
            color: "white",
            textTransform: "uppercase",
            transformOrigin: "50% 50%",
            transition: "transform 0.1s ease-out",
        },
    };

    // Function to generate circular text positions inside the circle
    const generateCircularText = (text, radius = 60) => {
        const characters = text.split("");
        const angleIncrement = (360 / characters.length) * (Math.PI / 180); // Convert degrees to radians

        return characters.map((char, index) => {
            const angle = index * angleIncrement - Math.PI / 2; // Offset to start at top
            const x = Math.cos(angle) * radius + 70; // x-coordinate adjusted for the new center
            const y = Math.sin(angle) * radius + 70; // y-coordinate adjusted for the new center

            return (
                <span
                    key={index}
                    style={{
                        position: "absolute",
                        color: "white",
                        fontSize: "10px",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        transform: `translate(-50%, -50%) rotate(${(angle * 180) / Math.PI}deg)`,
                        left: `${x}px`,
                        top: `${y}px`,
                    }}
                >
                    {char}
                </span>
            );
        });
    };

    // Handle scroll event to update rotation based on scroll direction
    const handleScroll = () => {
        // Get the scroll position and direction
        const scrollPosition = window.scrollY;

        if (scrollPosition > previousScrollPosition.current) {
            setRotation((prev) => prev + 5); // Increase rotation for clockwise
        } else if (scrollPosition < previousScrollPosition.current) {
            setRotation((prev) => prev - 5); // Decrease rotation for counterclockwise
        }

        previousScrollPosition.current = scrollPosition; // Update previous scroll position
    };

    // Attach scroll listener when component mounts
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="relative w-full h-[800px]">
            {/* Use layout="fill" to ensure the image covers full width and height */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src="/Background/spacer03.png"
                    alt="Background Image"
                    layout="fill"  // Cover the full width and height
                    objectFit="cover"  // Ensure image fills the space without distortion
                    priority
                />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h2 className=" font-cinzel text-center text-[38px] sm:text-[42px] md:text-[48px] font-regular text-black opacity-90 bg-opacity-50 p-4 rounded-lg mb-6">
                    Please Book An Appointment To <br />
                    Get A Proper Quotation.
                </h2>

                {/* Circle with Circular Text wrapped in an anchor tag */}
                <a
                    href="https://calendly.com/amantemaikho/30min" // Replace with your actual appointment URL
                    target="_blank" // Opens the link in a new tab
                    rel="noopener noreferrer" // To prevent security vulnerabilities
                    style={{ textDecoration: "none" }} // Remove default underline style for link
                >
                    <div style={styles.circleContainer} ref={circleRef}>
                        <div style={styles.circle}></div>
                        <div
                            style={{
                                ...styles.circularText,
                                transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
                            }}
                        >
                            {generateCircularText("Book an Appointment")}
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default MyFooter;
