"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import CustomButton from "./custombtn";

const SpacerImage = () => {
    // Refs for each element
    const textRefs = useRef([]);

    const [isVisible, setIsVisible] = useState({
        text1: false,
        text2: false,
        text3: false,
    });

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                const target = entry.target;
                const isIntersecting = entry.isIntersecting;

                // Update state to make the text visible when it enters the viewport
                if (isIntersecting && target.tagName === "DIV") {
                    const targetIndex = textRefs.current.indexOf(target);
                    if (targetIndex !== -1) {
                        const key = `text${targetIndex + 1}`;
                        setIsVisible((prev) => ({
                            ...prev,
                            [key]: true,
                        }));
                    }
                }
            },
            { threshold: 0.1 } // Trigger when 10% of the component is visible
        );

        // Observe all text elements
        textRefs.current.forEach((ref) => ref && observer.observe(ref));

        return () => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            textRefs.current.forEach((ref) => ref && observer.unobserve(ref));
        };
    }, []);

    return (
        <div
            className={`w-full h-[2000px] bg-cover bg-center bg-no-repeat relative`}
            style={{
                backgroundImage: "url('/Background/spacer2.png')",
            }}
        >
            {/* Container for Digital Marketing */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between px-4 md:px-8 lg:px-16 py-12 lg:py-32">
                {/* Left Image */}
                <Image
                    src="/Images/digitalmarketing.jpg"
                    alt="Marketing Image"
                    width={600}
                    height={400}
                    className={`w-full max-w-[600px] h-auto object-contain mt-8 lg:mt-32`}
                />

                {/* Text Content */}
                <div
                    ref={(el) => (textRefs.current[0] = el)}
                    className={`lg:ml-12 lg:w-[50%] text-center lg:text-left mt-8 lg:mt-32 opacity-0 transform translate-y-10 transition-all duration-700 ease-in-out ${isVisible.text1 ? "animate" : ""}`}
                >
                    <h2 className="font-normal text-black text-3xl lg:text-5xl font-cinzel opacity-80">
                        Digital
                        <br />
                        Marketing
                    </h2>

                    <p
                        className="font-normal text-black text-sm lg:text-base opacity-80 mt-4"
                        style={{ fontFamily: "Raleway, sans-serif", lineHeight: "1.8" }}
                    >
                        Maximize your online presence and drive meaningful results with my strategic
                        digital marketing solutions. From targeted social media campaigns and search engine optimization
                        (SEO) to engaging content creation and data-driven strategies, I tailor my
                        approach to help your brand stand out, attract the right audience,
                        and achieve sustainable growth in the digital world. Let me help you turn
                        your online presence into a powerful tool for success.
                    </p>
                    <div className="mt-[50px]">
                    <CustomButton/>
                    </div>              
                </div>
            </div>

            {/* Container for Mobile Development */}
            <div className="flex flex-col-reverse lg:flex-row justify-between items-center px-4 md:px-8 lg:px-16 py-12">
                <div
                    ref={(el) => (textRefs.current[1] = el)}
                    className={`lg:w-[50%] text-center lg:text-left mt-8 lg:mt-0 opacity-0 transform translate-y-10 transition-all duration-700 ease-in-out ${isVisible.text2 ? "animate" : ""}`}
                >
                    <h2 className="font-normal text-black text-3xl lg:text-5xl font-cinzel opacity-80">
                        Mobile
                        <br />
                        Development
                    </h2>
                    <p
                        className="font-normal text-black text-sm lg:text-base opacity-80 mt-4"
                        style={{ fontFamily: "Raleway, sans-serif", lineHeight: "1.8" }}
                    >
                        Enhance your business with cutting-edge mobile development solutions. From custom mobile app
                        design and seamless user experiences to robust functionality and cross-platform integration, I create
                        tailored mobile solutions that meet your unique needs. With a focus on developing high-
                        performance apps, I help you engage users, increase brand visibility, and drive business growth.
                    </p>
                    <div className="mt-[50px]">
                    <CustomButton/>
                    </div>  
                </div>

                <Image
                    src="/Images/mobiledev.jpg"
                    alt="Mobile Development"
                    width={600}
                    height={400}
                    className={`w-full max-w-[600px] h-auto object-contain mt-8 lg:mt-0`}
                />
            </div>

            {/* Container for Web Development */}
            <div className="flex flex-col lg:flex-row justify-between items-center px-4 md:px-8 lg:px-16 py-12">
                <Image
                    src="/Images/webdesign02.jpg"
                    alt="Web Development"
                    width={600}
                    height={400}
                    className={`w-full max-w-[600px] h-auto object-contain`}
                />
                <div
                    ref={(el) => (textRefs.current[2] = el)}
                    className={`lg:w-[50%] text-center lg:text-left mt-8 lg:mt-0 opacity-0 transform translate-y-10 transition-all duration-700 ease-in-out ${isVisible.text3 ? "animate" : ""}`}
                >
                    <h2 className="font-normal text-black text-3xl lg:text-5xl font-cinzel opacity-80">
                        Web
                        <br />
                        Development
                    </h2>
                    <p
                        className="font-normal text-black text-sm lg:text-base opacity-80 mt-4"
                        style={{ fontFamily: "Raleway, sans-serif", lineHeight: "1.8" }}
                    >
                        Elevate your business with advanced web development solutions. From custom website design and
                        intuitive user experiences to powerful functionality and seamless integrations, I create creative web
                        solutions that align with your unique goals.
                    </p>
                    <div className="mt-[50px]">
                    <CustomButton/>
                    </div>  
                </div>
            </div>

            <style jsx>{`
        .animate {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
        </div>
    );
};

export default SpacerImage;



