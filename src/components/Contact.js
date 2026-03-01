// src/components/Contact.js
import React from 'react';
import "../styles/contact.css";

function Contact() {
  return (
    <section id="contact" className="contactSection">
      <div className="contactCard glass">
        <h2 className="contactTitle">Contact Me</h2>
        <p className="contactSubtitle">
          Feel free to reach out for opportunities, collaborations, or questions.
        </p>

        <div className="contactLinks">
          <a
            href="https://www.linkedin.com/in/noah-ivers"
            target="_blank"
            rel="noreferrer"
            className="contactLink"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/noah-ivers"
            target="_blank"
            rel="noreferrer"
            className="contactLink"
          >
            GitHub
          </a>
        </div>

        <div className="contactEmail">
          <span className="contactEmailLabel">Email me at</span>
          <a href="mailto:Ivers.noah@gmail.com" className="contactEmailValue">
            Ivers.noah@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;