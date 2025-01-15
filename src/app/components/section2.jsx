"use client";
import React, { useState, useEffect, useRef } from "react";

const PortfolioStats = () => {
  const [rotation, setRotation] = useState(0);
  const [count, setCount] = useState(1); // Initialize with 1 to start counting from 1
  const [mobileAppCount, setMobileAppCount] = useState(1); // For Mobile Apps Built
  const [hasStartedCounting, setHasStartedCounting] = useState(false); // Track if counting should start
  const previousScrollPosition = useRef(0); // Move useRef outside handleScroll
  const circleRef = useRef(null);
  const statsRef = useRef(null); // Reference for the PortfolioStats component

  const styles = {
    container: {
      textAlign: "center",
      fontFamily: "'Arial', sans-serif",
      paddingTop: "0px", // To add some spacing at the top
      backgroundColor: "white",
      width: "100%",
      height: "auto",
    },
    circleContainer: {
      position: "relative",
      display: "inline-block",
      width: "140px", // Increased size to accommodate the extra 20px
      height: "140px", // Increased size
      margin: "auto",
    },
    circle: {
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      backgroundColor: "black",
      position: "absolute",
      top: 0,
      left: 0,
    },
    circularText: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "10px",
      color: "white",
      textTransform: "uppercase",
      transformOrigin: "50% 50%", // Center of rotation adjusted
      transition: "transform 0.1s ease-out", // Smooth transition for rotation
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
    statsContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "50px", // Space between the two numbers (Websites & Mobile Apps Built)
    },
  };

  // Function to generate circular text positions inside the circle
  const generateCircularText = (text, radius = 60) => {  // Increased radius to be closer to the edge of the circle
    const characters = text.split("");
    const angleIncrement = (360 / characters.length) * (Math.PI / 180); // Convert degrees to radians

    return characters.map((char, index) => {
      const angle = index * angleIncrement - Math.PI / 2; // Offset to start at top
      const x = Math.cos(angle) * radius + 70; // x-coordinate adjusted for the new center
      const y = Math.sin(angle) * radius + 70; // y-coordinate adjusted for the new center

      return (
        <span
          key={index}
          style={{
            position: "absolute",
            color: "white",
            fontSize: "10px",
            fontWeight: "bold",
            textTransform: "uppercase",
            transform: `translate(-50%, -50%) rotate(${(angle * 180) / Math.PI}deg)`,
            left: `${x}px`,
            top: `${y}px`,
          }}
        >
          {char}
        </span>
      );
    });
  };

  // Handle scroll event to update rotation based on scroll direction
  const handleScroll = () => {
    // Get the scroll position and direction
    const scrollPosition = window.scrollY;

    if (scrollPosition > previousScrollPosition.current) {
      // Scrolling down (clockwise)
      setRotation((prev) => prev + 5); // Increase rotation for clockwise
    } else if (scrollPosition < previousScrollPosition.current) {
      // Scrolling up (counterclockwise)
      setRotation((prev) => prev - 5); // Decrease rotation for counterclockwise
    }

    previousScrollPosition.current = scrollPosition; // Update previous scroll position
  };

  // Attach scroll listener when component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to animate the counting from 1 to 36
  useEffect(() => {
    let counter = 1;
    const intervalId = setInterval(() => {
      if (counter < 27) {
        counter++;
        setCount(counter);
      } else {
        clearInterval(intervalId); // Stop once it reaches 27
      }
    }, 50); // Update every 100ms to make the count more gradual

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [hasStartedCounting]);

  // Function to animate mobile apps count from 1 to 5
  useEffect(() => {
    let counter = 1;
    const intervalId = setInterval(() => {
      if (counter < 4) {
        counter++;
        setMobileAppCount(counter);
      } else {
        clearInterval(intervalId); // Stop once it reaches 5
      }
    }, 500); // Update every 100ms to make the count more gradual

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [hasStartedCounting]);

  // Intersection Observer to detect when the component is in the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStartedCounting) {
          setHasStartedCounting(true); // Start the counting when the component is visible
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the component is visible
    );

    if (statsRef.current) {
      observer.observe(statsRef.current); // Observe the component
    }

    return () => observer.disconnect(); // Clean up observer on unmount
  }, [hasStartedCounting]);

  return (
    <div ref={statsRef} style={styles.container}>
      <div style={styles.circleContainer} ref={circleRef}>
        <div style={styles.circle}></div>
        <div
          style={{
            ...styles.circularText,
            transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
          }}
        >
          {generateCircularText("VIEW PORTFOLIO")}
        </div>
      </div>

      {/* Stats Container for Websites Built & Mobile Apps Built */}
      <div>
        <h1 className="font-cinzel" style={styles.number}>{count}</h1>
        <p className="font-cinzel" style={styles.description}>Websites Built</p>
      </div>
      <div>
        <h1 className="font-cinzel" style={styles.number}>{mobileAppCount}</h1>
        <p className="font-cinzel" style={styles.description}>Mobile Apps Built</p>
      </div>
    </div>
  );
};

export default PortfolioStats;
