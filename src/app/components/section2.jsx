"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

const PortfolioStats = () => {
  const [count, setCount] = useState(1); // Initialize with 1 to start counting from 1
  const [mobileAppCount, setMobileAppCount] = useState(1); // For Mobile Apps Built
  const [hasStartedCounting, setHasStartedCounting] = useState(false); // Track if counting should start
  const statsRef = useRef(null); // Reference for the PortfolioStats component
  const [rotation, setRotation] = useState(0); // To control rotation of the container
  const text = "VIEW-PORTFOLIO-";
  const letters = text.split('');

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: "center",
      fontFamily: "'Arial', sans-serif",
      paddingTop: "0px",
      backgroundColor: "white",
      width: "100%",
      height: "100vh",
    },
    number: {
      fontSize: "74px",
      fontWeight: "400",
      margin: "10px 0",
    },
    description: {
      fontSize: "16px",
      color: "#333",
    },
    circle: {
      width: '120px',
      height: '120px',
      borderRadius: '50%',
      backgroundColor: 'black',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      marginBottom: '20px',
    },
    textContainer: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    staticText: {
      position: 'absolute',
      fontSize: '10px',
      fontWeight: 'bold',
      color: 'white',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      whiteSpace: 'nowrap',
    },
    statsWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    },
  };

  // Handle scroll event to update rotation based on scroll position
  const handleScroll = () => {
    const scrollPosition = window.scrollY; // Get the current scroll position
    setRotation(scrollPosition); // Set rotation based on scroll position
  };

  // Attach scroll listener when component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to animate the counting from 1 to 27
  useEffect(() => {
    let counter = 1;
    const intervalId = setInterval(() => {
      if (counter < 27) {
        counter++;
        setCount(counter);
      } else {
        clearInterval(intervalId);
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, [hasStartedCounting]);

  // Function to animate mobile apps count from 1 to 4
  useEffect(() => {
    let counter = 1;
    const intervalId = setInterval(() => {
      if (counter < 4) {
        counter++;
        setMobileAppCount(counter);
      } else {
        clearInterval(intervalId);
      }
    }, 500);

    return () => clearInterval(intervalId);
  }, [hasStartedCounting]);

  // Intersection Observer to detect when the component is in the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStartedCounting) {
          setHasStartedCounting(true); // Start the counting when the component is visible
        }
      },
      { threshold: 0.2 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasStartedCounting]);

  return (
    <div ref={statsRef} style={styles.container}>
      {/* Rotating Text Above the Stats */}
      <Link href="/projects">
        <div style={styles.circle}>
          <div style={{ ...styles.textContainer, transform: `rotate(${rotation}deg)` }}>
            {letters.map((letter, index) => (
              <span
                key={index}
                style={{
                  ...styles.staticText,
                  transform: `rotate(${(360 / letters.length) * index}deg) translateY(-50px)`,
                }}
              >
                {letter}
              </span>
            ))}
          </div>
        </div>
      </Link>

      <div style={styles.statsWrapper}>
        <Link href="/projects">
          <div>
            <h1 className="font-cinzel" style={styles.number}>{count}</h1>
            <p className="font-cinzel" style={styles.description}>Websites Built</p>
          </div>
        </Link>
        <div>
          <h1 className="font-cinzel" style={styles.number}>{mobileAppCount}</h1>
          <p className="font-cinzel" style={styles.description}>Mobile Apps Built</p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioStats;
