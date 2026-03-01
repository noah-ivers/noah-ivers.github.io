// src/components/Navbar.js
import React from 'react';
import "../styles/navbar.css";

function Navbar() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header>
      <nav>
        <div className='navlinks'>
          <button onClick={() => scrollToSection("about")} className="navbutton">
            About
          </button>
          <button onClick={() => scrollToSection("experience")} className="navbutton">
            Experience
          </button>
          <button onClick={() => scrollToSection("contact")} className="navbutton">
            Contact
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;