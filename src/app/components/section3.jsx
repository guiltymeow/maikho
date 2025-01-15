import React, { useState } from "react";
import Image from 'next/image';


const Section3 = () => {
    const [isHovered, setIsHovered] = useState(false);

    // Handle mouse enter and leave events to change button background color
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <section className="w-full h-auto m-0 p-0 bg-white relative">
            {/* Container for text and image */}
            <div className="flex flex-col md:flex-row items-center justify-between w-full px-4 sm:px-8 md:px-12 lg:px-24 xl:px-32">
                {/* Text Content (Left side on larger screens) */}
                <div className="flex flex-col items-center text-center w-full md:w-1/2 mb-4 sm:mb-8">
                    {/* Centered underline */}
                    <p className="text-[10px] mb-[20px] mt-[150px] sm:text-[12px] md:text-[14px] text-center">
                        _____________________
                    </p>
                    <h2 className="text-[30px] sm:text-[40px] md:text-[50px] font-regular font-cinzel opacity-90 ">
                        Discover the World of InnocentFox
                    </h2>
                    <p
                        className="text-[14px] sm:text-[16px] opacity-80"
                        style={{ fontFamily: "Raleway, sans-serif", lineHeight: "2" }}
                    >
                        In a world where nothing is as it seems, InnocentFox invites readers to embark on an
                        <br />
                        unforgettable journey through mystery, suspense, and unexpected twists.
                        <br />
                        This gripping new release takes you beyond the ordinary, where every page turns up
                        <br />
                        a new secret, and every character hides a story of their own.
                    </p>

                    {/* Centered "This is Sponsored By InnocentFox" text */}
                    <p
                        className="text-[16px] sm:text-[18px] opacity-80 text-center text-blue-500"
                        style={{ fontFamily: "Raleway, sans-serif", lineHeight: "2" }}
                    >
                        Sponsored By InnocentFox
                    </p>

                    {/* Button placed below the text */}
                    <a
                        href="https://www.webnovel.com/profile/4325105969"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative z-10 inline-block mt-4"
                        style={{
                            textDecoration: "none",
                            marginLeft: "auto",
                            marginRight: "auto",
                        }}
                    >
                        <button
                            className={`py-3 px-8 rounded-full font-bold text-[14px] sm:text-[16px] md:text-[18px] text-opacity-90 ${isHovered ? "bg-gray-300 text-black" : "bg-black text-white"}`}
                            style={{
                                fontFamily: "Raleway, sans-serif",
                                display: "inline-block", // Ensures proper width
                                marginRight: "15px", // Adjust the button to the left
                            }}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            GRAB A COPY
                        </button>
                    </a>
                </div>

                {/* Background Image (Right side on larger screens) */}
                <div className="w-full md:w-1/2 mb-4 sm:mb-8">
                    <Image
                        src="/Images/phone.png"
                        alt="Book Image"
                        className="w-[70%] sm:w-[60%] md:w-[50%] lg:w-[50%] xl:w-[50%] object-contain mx-auto"
                        width={500}  // Specify the width of the image (adjust as needed)
                        height={500} // Specify the height of the image (adjust as needed)
                        style={{
                            maxWidth: "100%",
                            maxHeight: "100%",
                            marginRight: "50px",
                            marginTop: "50px",
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default Section3;
