'use client';
import React, { useState, useEffect, useRef } from 'react';
import { FaJsSquare, FaReact, FaWordpress, FaShopify } from 'react-icons/fa'; 
import { SiCss3, SiHtml5, SiFirebase, SiNpm, SiAndroidstudio, SiFigma, SiCanva, SiVercel } from 'react-icons/si'; 
import { DiJqueryLogo, DiJava } from 'react-icons/di'; 
import { TbBrandThreejs } from 'react-icons/tb';

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
    { name: "Vercel", Icon: SiVercel },
    { name: "Three.js", Icon: TbBrandThreejs },
    { name: "Figma", Icon: SiFigma },
    { name: "Canva", Icon: SiCanva },
];

const Skills = () => {
    const [isSectionVisible, setIsSectionVisible] = useState(false);  
    const sectionRef = useRef(null); 

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsSectionVisible(true);  
                }
            },
            { threshold: 0.2 }  
        );

        const currentSectionRef = sectionRef.current;

        if (currentSectionRef) {
            observer.observe(currentSectionRef);
        }

        return () => {
            
            if (currentSectionRef) {
                observer.unobserve(currentSectionRef); 
            }
        };
    }, []); 

    return (
        <section
            ref={sectionRef}  
            className={`py-10 bg-white transition-all duration-700 ${isSectionVisible ? "opacity-100 transform translate-y-0" : "opacity-0 translate-y-10"}`}  // Apply bg-white for white background
        >
            <div>
                <h2
                    className="font-cinzel text-[52px] text-center opacity-90"
                    style={{ marginBottom: '100px' }}
                >
                    View Some Of My Skills
                </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-8 mx-auto max-w-6xl px-4">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center text-center group"
                    >
                        {/* Logo Circle with hover scale effect */}
                        <div className="w-24 h-24 flex items-center justify-center bg-black rounded-full group-hover:scale-110 transition duration-300 ease-in-out">
                            <skill.Icon className="w-20 h-20 text-white" /> {/* Increased icon size */}
                        </div>
                        <p className="text-black mt-2">{skill.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
