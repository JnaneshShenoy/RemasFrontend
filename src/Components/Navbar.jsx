import React from 'react'
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

import "../App.css";
import "../css/constants.css";
const Navbar = () => {

    // Create state to manage hover style for individual links
  const [hoveredLink, setHoveredLink] = React.useState(null);

  // Event handlers for mouse enter and leave
  const handleMouseEnter = (link) => {
    setHoveredLink(link);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  // Function to determine style based on hovered link
  const linkStyle = (link) => ({
    transform: hoveredLink === link ? "scale(1.1)" : "none",
    transition: "transform 0.3s ease",
  });

  //Adding Navigation bar effect
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    setSticky(offset > 400);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Create state for Software Engineer effect
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true); // Trigger the fade-in effect on component mount
  }, []);

  // Create state for arrow effect
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    // Set a timeout to show the arrow after a few seconds
    const timer = setTimeout(() => {
      setShowArrow(true);
    }, 2000);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <header className="App-header-nav">
        <nav className={`Navigation ${isSticky ? "sticky" : ""}`}>
          <div className="Nav-links">
            <Link
              to="aboutMe"
              spy={true}
              smooth={true}
              offset={-70}
              duration={200}
              className="navLinks"
              style={linkStyle("aboutMe")}
              onMouseEnter={() => handleMouseEnter("aboutMe")}
              onMouseLeave={handleMouseLeave}
            >
              About
            </Link>
            {/*YET TO EDIT !!!!!!!!!*/}
            <Link
              to="aboutMe"
              spy={true}
              smooth={true}
              offset={-70}
              duration={200}
              className="navLinks"
              style={linkStyle("shop")}
              onMouseEnter={() => handleMouseEnter("shop")}
              onMouseLeave={handleMouseLeave}
            >
              Shop
            </Link>

     

            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={200}
              className="navLinks"
              style={linkStyle("contact")}
              onMouseEnter={() => handleMouseEnter("contact")}
              onMouseLeave={handleMouseLeave}
            >
              Contact
            </Link>

            <Link
              to="aboutMe"
              spy={true}
              smooth={true}
              offset={-70}
              duration={200}
              className="navLinks"
              style={linkStyle("LogReg")}
              onMouseEnter={() => handleMouseEnter("LogReg")}
              onMouseLeave={handleMouseLeave}
            >
              Login / Register
            </Link>

          
          </div>
        </nav>

        
      </header>



      
    </div>
  );    
}

  


export default Navbar
