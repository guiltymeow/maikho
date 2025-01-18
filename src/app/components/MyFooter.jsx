import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const MyFooter = () => {
    const [rotation, setRotation] = useState(0); 
    const text = "BOOK-AN-APPOINTMENT-";
    const letters = text.split("");
    const previousScrollPosition = useRef(0); 

    const styles = {
        circleContainer: {
            position: "relative",
            display: "inline-block",
            width: "140px",
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
        textContainer: {
            position: "absolute",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        staticText: {
            position: "absolute",
            fontSize: "10px",
            fontWeight: "bold",
            color: "white",
            textTransform: "uppercase",
            letterSpacing: "1px",
            whiteSpace: "nowrap",
        },
    };

    // Handle scroll event to rotate the text
    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > previousScrollPosition.current) {
            setRotation((prev) => prev + 5);
        } else if (scrollPosition < previousScrollPosition.current) {
            setRotation((prev) => prev - 5);
        }
        previousScrollPosition.current = scrollPosition;
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="relative w-full h-[500px]">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src="/Background/spacer3.png"
                    alt="Background Image"
                    layout="fill"
                    objectFit="cover"
                    priority
                />
            </div>

            {/* Content Centered */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h2 className="font-cinzel text-center text-[38px] sm:text-[42px] md:text-[48px] font-regular text-black opacity-80 bg-opacity-50 p-4 rounded-lg mb-6">
                    Please Book An Appointment To <br />
                    Get A Proper Quotation.
                </h2>

                {/* Rotating Circle with Circular Text */}
                <a
                    href="https://calendly.com/amantemaikho/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                >
                    <div style={styles.circleContainer}>
                        <div style={styles.circle}></div>
                        <div
                            style={{
                                ...styles.textContainer,
                                transform: `rotate(${rotation}deg)`,
                            }}
                        >
                            {letters.map((letter, index) => (
                                <span
                                    key={index}
                                    style={{
                                        ...styles.staticText,
                                        transform: `rotate(${(360 / letters.length) * index}deg) translateY(-60px)`, // Adjusted for edge alignment
                                    }}
                                >
                                    {letter}
                                </span>
                            ))}
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default MyFooter;
