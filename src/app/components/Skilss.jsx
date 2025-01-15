'use client';
import React, { useState, useEffect, useRef } from 'react';
import { FaJsSquare, FaReact, FaWordpress, FaShopify } from 'react-icons/fa'; // React-icons for JavaScript, React, WordPress, Shopify
import { SiCss3, SiHtml5, SiFirebase, SiNpm, SiAndroidstudio } from 'react-icons/si'; // Simple-icons for CSS3, HTML5, Firebase, npm, Android Studio
import { DiJqueryLogo, DiJava } from 'react-icons/di'; // Di icons for jQuery and Java

const skills = [
    { name: "Java", Icon: DiJava },
    { name: "HTML5", Icon: SiHtml5 },
    { name: "CSS3", Icon: SiCss3 },
    { name: "React", Icon: FaReact },
    { name: "JavaScript", Icon: FaJsSquare },
    { name: "WordPress", Icon: FaWordpress },
    { name: "Shopify", Icon: FaShopify },
    { name: "jQuery", Icon: DiJqueryLogo },
    { name: "Firebase", Icon: SiFirebase },
    { name: "npm", Icon: SiNpm },
    { name: "Android Studio", Icon: SiAndroidstudio },
];

const Skills = () => {
    const [isSectionVisible, setIsSectionVisible] = useState(false);  // State for section visibility
    const sectionRef = useRef(null);  // Reference for the section

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsSectionVisible(true);  // Set section as visible when in view
                }
            },
            { threshold: 0.2 }  // Trigger when 20% of the section is in view
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            // Cleanup observer when component unmounts
            // eslint-disable-next-line react-hooks/exhaustive-deps
            if (sectionRef.current) {
                observer.disconnect();
            }
        };
    }, []); // Dependency array is empty, observer will be set only on mount

    return (
        <section
            ref={sectionRef}  // Added reference for section visibility tracking
            className={`py-10 bg-white transition-all duration-700 ${isSectionVisible ? "opacity-100 transform translate-y-0" : "opacity-0 translate-y-10"}`}  // Apply bg-white for white background
        >
            {/* Responsive Grid with Tailwind breakpoints */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 mx-auto max-w-6xl px-4">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center text-center group"
                    >
                        {/* Logo Circle with hover scale effect */}
                        <div className="w-24 h-24 flex items-center justify-center bg-black rounded-full group-hover:scale-110 transition duration-300 ease-in-out">
                            <skill.Icon className="w-16 h-16 text-white" />
                        </div>
                        <p className="text-black mt-2">{skill.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
