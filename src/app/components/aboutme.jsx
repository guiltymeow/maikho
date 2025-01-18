import { useState, useEffect, useRef } from 'react';

const About = () => {
    const textSectionRef = useRef(null);
    const [textVisible, setTextVisible] = useState(false);
    const [animationCompleted, setAnimationCompleted] = useState(false);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    const paragraphs = [
        "Hi! I’m Maikho Amante also known as GuiltyMeow, a passionate developer",
        "with 2 years of experience in mobile app development and 1 year of",
        "experience in web development. Over the past year, I’ve had the",
        "opportunity to create user-friendly and efficient mobile applications,",
        "focusing on seamless performance and intuitive design. In addition to",
        "my mobile development skills, I have also honed my web development",
        "skills, where I’ve worked with various frontend and backend",
        "technologies to build dynamic and responsive websites. I’m always eager",
        "to learn new technologies and expand my skill set, and I’m excited to contribute to",
        "projects that bring innovative solutions to life."
    ];

    // Intersection Observer for Text Section
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !animationCompleted) {
                    setTextVisible(true);
                    setAnimationCompleted(true); // Make sure animation only happens once
                }
            },
            { threshold: 0.2 }
        );

        if (textSectionRef.current) {
            observer.observe(textSectionRef.current);
        }

        return () => {
            if (textSectionRef.current) observer.disconnect();
        };
    }, [animationCompleted]);

    // Function to handle sequential animation
    useEffect(() => {
        if (textVisible) {
            const timeout = setTimeout(() => {
                if (currentTextIndex < paragraphs.length - 1) {
                    setCurrentTextIndex((prevIndex) => prevIndex + 1);
                }
            }, 500); // Adjust delay for animation (e.g., 1000ms)

            return () => clearTimeout(timeout);
        }
    }, [textVisible, currentTextIndex]);

    return (
        <div
            ref={textSectionRef}
            className={`w-fill bg-white h-auto transition-opacity duration-1000 ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
        >
            {/* Sequential Text Animation */}
            {paragraphs.map((text, index) => (
                <p
                    key={index}
                    className={`font-cinzel text-center text-[22px] ${index <= currentTextIndex ? 'animate-fade-in' : 'opacity-0'
                        }`}
                    style={{
                        transitionDelay: `${index * 500}ms`, // Delay each paragraph
                    }}
                >
                    {text}
                </p>
            ))}
        </div>
    );
};

export default About;
