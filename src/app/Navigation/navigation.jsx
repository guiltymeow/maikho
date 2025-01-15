"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle the menu state
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true); // When scrolled down, navbar background becomes fully visible
            } else {
                setScrolling(false); // Navbar background has opacity 0 when at the top
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup the event listener on unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        // Disable scrolling when the menu is open
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        // Cleanup: Reset overflow when component unmounts
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isMenuOpen]);

    return (
        <nav className="fixed top-0 left-0 w-full z-10">
            {/* Navbar Background */}
            <div
                className={`bg-black transition-all duration-300 absolute top-0 left-0 w-full h-full ${scrolling ? 'opacity-100' : 'opacity-0'}`}
            />

            <div className="max-w-7xl mx-auto p-4 relative">
                <div className="flex justify-between items-center">
                    {/* Logo or Title */}
                    <div
                        className={`text-[18px] font-regular font-cinzel ml-4 sm:ml-8 md:ml-[50px] transition-all duration-300 ${scrolling ? 'mt-0' : 'mt-[50px]'} ${isMenuOpen ? 'animate-slideOut' : ''}`}
                    >
                        <Link href="/">
                            Maikho Amante
                        </Link>
                    </div>

                    {/* Hamburger Icon or Close Icon */}
                    <div className="ml-auto">
                        <button
                            onClick={toggleMenu}
                            className="absolute transition-all duration-300 top-6 right-6 text-white text-3xl focus:outline-none"
                            style={{ top: scrolling ? '10px' : '50px', right: '20px' }}
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        >
                            {isMenuOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="w-8 h-8 animate-close"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="w-8 h-8 animate-burger"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Fullscreen Menu when Hamburger is Clicked */}
            <div
                className={`${isMenuOpen ? 'fixed top-0 left-0 w-full h-full bg-black bg-opacity-100' : 'hidden'} 
                    ${isMenuOpen ? 'animateArcUpward' : ''} 
                    flex justify-center items-center flex-col space-y-6 text-white`}
            >
                {/* Close Button (X) */}
                {isMenuOpen && (
                    <button
                        onClick={toggleMenu}
                        className="absolute top-6 right-6 text-white text-3xl focus:outline-none"
                        style={{ top: '50px', right: '20px', marginRight: '130px' }}
                        aria-label="Close menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-8 h-8 animate-close"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                )}

                {/* Links */}
                <Link href="/" className="text-[50px] opacity-[0.8] hover:text-white hover:opacity-100 font-cinzel" onClick={toggleMenu}>
                    Home
                </Link>

                <Link href="/about" className="text-[50px] opacity-[0.8] hover:text-white hover:opacity-100 font-cinzel" onClick={toggleMenu}>
                    About
                </Link>
                <Link href="/projects" className="text-[50px] opacity-[0.8] hover:text-white hover:opacity-100 font-cinzel" onClick={toggleMenu}>
                    Projects
                </Link>
                <Link href="/blog" className="text-[50px] opacity-[0.8] hover:text-white hover:opacity-100 font-cinzel" onClick={toggleMenu}>
                    Blogs
                </Link>

                {/* Centered Text */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-center">
                    <p className="font-cinzel text-[15px]">CONTACT ME</p>
                    <p className="font-cinzel text-[15px]">amantemaikho@gmail.com</p>
                </div>
                <div className="border-t border-white w-[65%] mx-auto mb-2 opacity-80 "></div>

                {/* Bottom left positioned text */}
                <div className="absolute bottom-6 left-6 text-white sm:left-12 md:left-24">
                    <p className="font-cinzel text-[15px]">MAIKHO AMANTE</p>
                    <p className="font-cinzel text-[15px]">WEB DEVELOPER</p>
                </div>

                {/* Social Icons at the bottom-right */}
                <div className="absolute bottom-6 right-6 flex space-x-4 mt-4 sm:mt-6 md:mt-8"
                    style={{
                        marginBottom: '10px',
                        marginRight: '50px'
                    }}
                >
                    {/* Facebook Icon */}
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="w-6 h-6 text-white opacity-[0.8]  hover:text-white hover:opacity-100" />
                    </a>

                    {/* Instagram Icon */}
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="w-6 h-6 text-white opacity-[0.8]  hover:text-white hover:opacity-100" />
                    </a>

                    {/* Twitter Icon */}
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="w-6 h-6 text-white opacity-[0.8]  hover:text-white hover:opacity-100" />
                    </a>

                    {/* TikTok Icon */}
                    <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                        <FaTiktok className="w-6 h-6 text-white  opacity-[0.8]  hover:text-white hover:opacity-100" />
                    </a>
                </div>
            </div>

            <style jsx>{`
                .animate-burger {
                    transition: transform 0.3s ease-in-out;
                }
                .animate-close {
                    transform: scale(1.2) rotate(180deg);
                    transition: transform 0.3s ease-in-out;
                }
                .rotate-180 {
                    transform: rotate(180deg);
                }
                .animate-slideOut {
                    transform: translateX(100%);
                    transition: transform 0.5s ease-out;
                }
                @media (max-width: 640px) {
                    .text-[50px] {
                        font-size: 40px;
                    }
                    .font-cinzel {
                        font-size: 12px;
                    }
                }
            `}</style>
        </nav>
    );
}
