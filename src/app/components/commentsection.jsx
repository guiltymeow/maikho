// CommentSection.jsx
import React, { useState, useEffect } from "react";
import MyFooter from "./MyFooter"; // Import the MyFooter component

const CommentSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    const randomComments = [
        { name: "InnocentFox", comment: "This service is absolutely fantastic! I’m beyond thrilled with the results and couldn’t be more impressed. The quality, attention to detail, and over all experience have exceeded my expectations in every way. I’m genuinely amazed at how well everything turned out—truly top-notch!" },
        { name: "Thomas", comment: "Maikho is very creative and stylish. He is easy to work with, he can do exactly what you visualize. He can easily understand the instructions and can apply it at once. We will get him again on our next project." },
        { name: "Aki", comment: "I am really impressed on how he work on our website. He was able to finish it in a timely manner and we are so glad with the website outcome. He was also really helpful on maintaining the website, especially in every question on how we can make it better. We highly recommend Maikho if you guys need a high quality website! Thank youso much!" },
        { name: "Banjeet", comment: "Exceeded all expectations with his exceptional website creations ervices. From start to finish, He demonstrated professionalism,creativity, and attention to detail. My website not only looks perfect but also functions flawlessly, helpful and user friendly, thanks to his expertise." },
        { name: "Michael", comment: "Professional, reliable, and efficient. 10/10 would use again 👍🌟." }
    ];

    // Auto change slide every 5 seconds
    useEffect(() => {
        const id = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % randomComments.length);
        }, 7500);

        setIntervalId(id);

        // Clean up the interval on component unmount
        return () => clearInterval(id);
    }, [randomComments.length]);

    const handleDotClick = (index) => {
        setCurrentSlide(index);
        if (intervalId) {
            clearInterval(intervalId); // Stop the auto-slide when user interacts
            const newId = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % randomComments.length);
            }, 5000);
            setIntervalId(newId);
        }
    };

    return (
        <section className="testimonial-section py-10 font-cinzel">
            <h2 className="text-center text-[48px] sm:text-[56px] md:text-[64px] font-regular mb-6 opacity-90">
                Testimonials
            </h2>
            <h2 className="text-center text-[32px] sm:text-[38px] md:text-[42px] font-medium mb-4 opacity-90">
                What my clients say
            </h2>

            <div className="testimonial-container flex justify-center mb-8 w-full px-4"> {/* w-full ensures full width */}
                <div className="testimonial p-8 bg-white-500 rounded-lg shadow-lg text-center w-full sm:w-full md:w-full lg:w-full"> {/* Updated width to w-full */}
                    <p className="text-xl sm:text-2xl md:text-3xl italic mb-4">
                        &quot;{randomComments[currentSlide].comment}&quot;
                    </p>
                    <p className="font-semibold text-lg sm:text-xl md:text-2xl">
                        {randomComments[currentSlide].name}
                    </p>
                </div>
            </div>

            {/* Dots indicating current slide */}
            <div className="border-t border-black w-[70%] mx-auto mb-2 opacity-60 mt-[50px]"></div>
            <div className="dots flex justify-center space-x-8 mt-[40px]">
                {/* Increased space between dots */}
                {randomComments.map((_, index) => (
                    <span
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`dot h-2 w-2 bg-black rounded-full cursor-pointer transition-all duration-300 ${currentSlide === index ? "bg-opacity-100" : "bg-opacity-50"
                            }`}
                    ></span>
                ))}
            </div>
        </section>
    );
};

export default CommentSection;
