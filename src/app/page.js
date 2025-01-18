    'use client';
    import { useState, useEffect, useRef, useMemo } from "react";
    import Head from "next/head";
    import Opening from "./animation/opening";
    import Navigation from "./Navigation/navigation";
    import Section2 from "./components/section2";
    import Section3 from "./components/section3";
    import Section4 from "./components/section4";
    import Skills from "./components/Skilss";
    import CommentSection from "./components/commentsection";
    import MyFooter from "./components/MyFooter";
    import Link from "next/link";


    export default function Home() {
        const [isMenuOpen, setIsMenuOpen] = useState(false);
        const [loading, setLoading] = useState(true);
        const [isLoadingComplete, setIsLoadingComplete] = useState(false);
        const [hasShrunk, setHasShrunk] = useState(false);
        const [isDivVisible, setIsDivVisible] = useState(false);
        const [hasAnimatedOnce, setHasAnimatedOnce] = useState(false);

        const backgrounds = [
            "/Background/background-design-1.png",
            "/Background/background-design-2.png",
            "/Background/background-design-3.png",
            "/Background/background-design-4.png",
        ];
        const [currentBackground, setCurrentBackground] = useState(0);

        const backgroundTexts = useMemo(() => [
            "DIGITAL MARKETING",
            "BRANDING",
            "MOBILE DESIGN AND DEVELOPMENT",
            "WEB DESIGN AND DEVELOPMENT",
        ], []);

        const [currentText, setCurrentText] = useState(backgroundTexts[0]);

        const animationDivRef = useRef(null);

        const romanNumerals = ["I", "II", "III", "IV"];

        const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

        const onLoadingComplete = () => setIsLoadingComplete(true);
        const onShrinkComplete = () => setHasShrunk(true);

        useEffect(() => {
            window.scrollTo(0, 0);

            const timer = setTimeout(() => setLoading(false), 3000);
            return () => clearTimeout(timer);
        }, []);

        useEffect(() => {
            if (!loading && animationDivRef.current && !hasAnimatedOnce) {
                const observer = new IntersectionObserver(
                    ([entry]) => {
                        if (entry.isIntersecting) {
                            setIsDivVisible(true);
                            setHasAnimatedOnce(true);
                        }
                    },
                    { threshold: 0.2 }
                );

                observer.observe(animationDivRef.current);
                return () => observer.disconnect();
            }
        }, [loading, hasAnimatedOnce]);

        useEffect(() => {
            const interval = setInterval(() => {
                setCurrentBackground((prev) => (prev + 1) % backgrounds.length);
                setCurrentText((prev) => {
                    const currentIndex = backgroundTexts.indexOf(prev);
                    return backgroundTexts[(currentIndex + 1) % backgroundTexts.length];
                });
            }, 5000);

            return () => clearInterval(interval);
        }, [backgrounds.length, backgroundTexts]);

        return (
            <>
                <Head>
                    <title>Maikho Amante</title>
                    <meta name="description" content="Maikho Amante - Web Design and Development Freelancer" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main className="flex flex-col items-center justify-between p-0 m-0 min-h-screen overflow-hidden">
                    {loading ? (
                        <Opening
                            onLoadingComplete={onLoadingComplete}
                            onShrinkComplete={onShrinkComplete}
                        />
                    ) : (
                        hasShrunk && (
                            <>
                                {/* Hero Section */}
                                <section
                                    className={`w-full h-screen m-0 p-0 bg-cover bg-center bg-no-repeat relative ${isMenuOpen ? "overflow-hidden" : ""
                                        }`}
                                >
                                    {/* Navbar */}
                                    <header className="fixed top-0 left-0 w-full bg-black/0 text-white m-0 z-30 shadow-md">
                                        <div className="flex justify-between items-center w-full max-w-7xl mx-auto px-4">
                                            <Navigation isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
                                        </div>
                                    </header>

                                    {/* Overlay when Navbar is open */}
                                    {isMenuOpen && (
                                        <div className="absolute inset-0 bg-black bg-opacity-70 z-20"></div>
                                    )}

                                    {/* Background Image */}
                                    <div
                                        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                                        style={{
                                            backgroundImage: `url('${backgrounds[currentBackground]}')`,
                                        }}
                                    ></div>

                                    {/* Main Content */}
                                    <div className="mt-[30vh] text-center text-white relative z-10 px-4 ">
                                        <h1 className="text-[14px] font-bold font-cinzel sm:text-[16px] md:text-[18px]">
                                            PROVIDE
                                        </h1>
                                        <h1 className="text-[36px] sm:text-[48px] md:text-[62px] font-regular font-cinzel opacity-85">
                                            {currentText}
                                        </h1>
                                    </div>

                                    {/* Explore Project Button */}
                                    <div className="flex justify-center mt-6 relative z-10">
                                        <Link href="/projects">
                                            <button
                                                className="px-6 py-2 md:px-8 md:py-3 border border-white font-cinzel text-white font-regular rounded-full bg-transparent hover:bg-white hover:text-black transition duration-300 ease-in-out"
                                            >
                                                Explore Project
                                            </button>
                                        </Link>
                                    </div>

                                    {/* Roman numeral counter */}
                                    <div
                                        className="absolute bottom-6 right-6 text-white font-regular font-cinzel opacity-80 z-10"
                                        style={{
                                            marginRight: "5%",
                                            fontSize: "72px",
                                        }}
                                    >
                                        <div
                                            style={{
                                                fontSize: "48px",
                                                marginBottom: "-60px",
                                                marginLeft: "-40px",
                                            }}
                                        >
                                            {romanNumerals[currentBackground]}
                                        </div>
                                        <span
                                            style={{
                                                fontSize: "60px",
                                                lineHeight: "72px",
                                                fontWeight: "100",
                                                opacity: "50%",
                                            }}
                                        >
                                            /
                                        </span>
                                        <span
                                            style={{
                                                fontSize: "22px",
                                                opacity: "50%",
                                            }}
                                        >
                                            IV
                                        </span>
                                    </div>

                                    {/* Centered dots */}
                                    <div
                                        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 z-10"
                                        style={{ marginBottom: "200px" }}
                                    >
                                        {backgrounds.map((_, index) => (
                                            <span
                                                key={index}
                                                onClick={() => {
                                                    setCurrentBackground(index);
                                                    setCurrentText(backgroundTexts[index]);
                                                }}
                                                className={`h-3 w-3 rounded-full cursor-pointer ${currentBackground === index ? "bg-white" : "bg-gray-400"
                                                    }`}
                                            ></span>
                                        ))}
                                    </div>
                                </section>

                                {/* Spacer Section */}
                                <section
                                    className={`w-full h-[500px] m-0 p-0 bg-cover bg-center bg-no-repeat ${isMenuOpen ? "pointer-events-none" : ""
                                        }`}
                                    style={{
                                        backgroundImage: `url('/Background/spacer.png')`,
                                    }}
                                >
                                    <div
                                        ref={animationDivRef}
                                        className="flex flex-col justify-center items-center h-full space-y-4 text-center"
                                    >
                                        <p
                                            className={`text-black font-regular text-[10px] ${isDivVisible ? "baseline-animation" : ""
                                                }`}
                                        >
                                            _____________________
                                        </p>
                                        <h2
                                            className={`text-black font-regular text-[34px] font-cinzel opacity-80 ${isDivVisible ? "baseline-animation" : ""
                                                }`}
                                        >
                                            HI, MY NAME IS MAIKHO AND I’M A FREELANCER.
                                        </h2>
                                        <h2
                                            className={`text-black font-regular text-[34px] font-cinzel opacity-80 ${isDivVisible ? "baseline-animation" : ""
                                                }`}
                                        >
                                            I’M DOING WEB DESIGN, AND
                                        </h2>
                                        <h2
                                            className={`text-black font-regular text-[34px] font-cinzel opacity-80 ${isDivVisible ? "baseline-animation" : ""
                                                }`}
                                        >
                                            MOBILE APP DEVELOPMENT.
                                        </h2>
                                        <h2
                                            className={`text-black text-[34px] ${isDivVisible ? "baseline-animation" : ""
                                                }`}
                                            style={{ fontFamily: "RhythemSignature, sans-serif" }}
                                        >
                                            maikho amante
                                        </h2>
                                    </div>
                                </section>

                                {/* Other Sections */}
                                <div className="w-fill bg-white h-auto">
                                    <Section2 />
                                    <Section3 />
                                    <Section4 />
                                    <Skills />
                                    <div className="mt-[200px]">
                                        <CommentSection />
                                    </div>
                                    <div className="mt-[200px]">
                                        <MyFooter />
                                    </div>
                            

                                </div>
                            </>
                        )
                    )}
                </main>
            </>
        );
    }
