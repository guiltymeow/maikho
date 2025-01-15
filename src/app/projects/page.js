'use client';
import { useState, useEffect, useRef } from "react";
import Opening from "../animation/opening";
import Navigation from "../Navigation/navigation";
import Skills from "../components/Skilss";
import CommentSection from "../components/commentsection";
import MyFooter from "../components/MyFooter";
import BentoBox from "../components/project";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  const [hasShrunk, setHasShrunk] = useState(false);
  const [isDivVisible, setIsDivVisible] = useState(false);
  const [hasAnimatedOnce, setHasAnimatedOnce] = useState(false);

  const animationDivRef = useRef(null);

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
    if (isLoadingComplete) {
      const handleMouseMove = (e) =>
        setMousePosition({ x: e.clientX, y: e.clientY });
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [isLoadingComplete]);

  useEffect(() => {
    let frameId;
    const animate = () => {
      const dx = mousePosition.x - circlePosition.x;
      const dy = mousePosition.y - circlePosition.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance > 0.5) {
        const speed = 0.1;
        setCirclePosition({
          x: circlePosition.x + dx * speed,
          y: circlePosition.y + dy * speed,
        });
      }
      frameId = requestAnimationFrame(animate);
    };

    if (isLoadingComplete && hasShrunk) animate();

    return () => cancelAnimationFrame(frameId);
  }, [mousePosition, circlePosition, isLoadingComplete, hasShrunk]);

  return (
    <>
      <main className="flex flex-col items-center justify-between p-0 m-0 min-h-screen overflow-hidden">
        {loading ? (
          <Opening
            onLoadingComplete={onLoadingComplete}
            onShrinkComplete={onShrinkComplete}
            setCirclePosition={setCirclePosition}
          />
        ) : (
          hasShrunk && (
            <>
              {/* Section 1 */}
              <section
                className="w-full h-screen m-0 p-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('/Background/webdesign.png')` }}
              >
                <header
                  className={`fixed top-0 left-0 w-full bg-black/0 text-white p-4 z-${isMenuOpen ? 20 : 10} shadow-md`}
                >
                  <div className="flex justify-between items-center w-full max-w-7xl mx-auto">
                    <Navigation isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
                  </div>
                </header>

                <div className="mt-[180px] text-center text-white">
                  <h1 className="text-[14px] font-bold font-cinzel">PROVIDE</h1>
                  <h1 className="text-[48px] sm:text-[62px] font-regular font-cinzel opacity-85">
                    MOBILE DESIGN
                  </h1>
                  <h1 className="text-[48px] sm:text-[62px] font-regular font-cinzel opacity-85">
                    DEVELOPMENT
                  </h1>
                </div>
              </section>

              {/* Section 2 */}
              <section
                className="w-full h-[500px] m-0 p-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('/Background/spacer.png')` }}
              >
                <div
                  ref={animationDivRef}
                  className="flex flex-col justify-center items-center h-full space-y-4 text-center"
                >
                  <p
                    className={`text-black font-regular text-[10px] ${isDivVisible ? "baseline-animation" : ""}`}
                  >
                    _____________________
                  </p>
                  <h2
                    className={`text-black font-regular text-[34px] font-cinzel opacity-80 ${isDivVisible ? "baseline-animation" : ""}`}
                  >
                    I Don&apos;t just build a website,
                  </h2>
                  <h2
                    className={`text-black font-regular text-[34px] font-cinzel opacity-80 ${isDivVisible ? "baseline-animation" : ""}`}
                  >
                    I build a website that sells.
                  </h2>
                  <p
                    className={`text-black text-center font-regular text-[16px] font-cinzel opacity-80 ${isDivVisible ? "baseline-animation" : ""}`}
                  >
                    Most developers and designers can build stunning websites, but many miss<br />
                    the mark when it comes to creating websites that actually sell. That’s <br />
                    where I stand out. As a Marketing Management graduate, I combine design <br />
                    expertise with proven marketing strategies to craft high-converting websites that drive results.
                  </p>
                  <h2
                    className={`text-black text-center font-regular text-[60px] font-cinzel opacity-80 ${isDivVisible ? "baseline-animation" : ""}`}
                  >
                    Projects
                  </h2>
                </div>
              </section>
              <section className="bg-white w-full ">
                <div className="w- h-[1600px] bg-white" >
                <BentoBox />
                </div>
              </section>
            </>
          )
        )}

        {!loading && (
          <div
            className="mouse-circle"
            style={{
              left: `${Math.max(0, Math.min(window.innerWidth - 50, circlePosition.x))}px`,
              top: `${Math.max(0, Math.min(window.innerHeight - 50, circlePosition.y))}px`,
            }}
          ></div>
        )}

        <style jsx>{`
          .mouse-circle {
            position: fixed;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            border: 0.5px solid white;
            background-color: transparent;
            pointer-events: none;
            transform: translate(-50%, -50%);
          }
          body,
          html {
            margin: 0;
            padding: 0;
            overflow-x: hidden;
          }

          /* Responsive design */
          @media (max-width: 768px) {
            section {
              margin-bottom: 20px;
              padding: 10px;
            }

            h2 {
              font-size: 28px;
            }

            .border-t {
              margin-bottom: 20px;
            }
          }
        `}</style>

        {/* Section with Skills */}
        {!loading && hasShrunk && (
          <section className="w-full h-auto px-0 bg-white">
            <h2 className="text-center text-black bg-white font-regular text-[32px] sm:text-[42px] lg:text-[52px] font-cinzel opacity-80">
              View Some Of My Skills
            </h2>
            <Skills />
            <div className="w-full h-[200px] bg-white"></div>
            <CommentSection />
            <MyFooter />
          </section>
        )}
      </main>
    </>
  );
}
