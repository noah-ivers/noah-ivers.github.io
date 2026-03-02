import React from 'react';
import '../styles/main.css';
import headshot from '../assets/headshot.jpeg';
//import JourneyMap from './JourneyMap';

function Main() {
  return (
    <div>
      <div className="openingContainer">
        <div className="openingText">
          <h1 className="introHeader">
            I&apos;m Noah Ivers
          </h1>
          <p className="introPara">
            A Full-Stack Developer with experience building applications for individual clients, small businesses, and enterprise organizations.          </p>
        </div>
        <div className="openingPicture">
          <img className="headshotPhoto" src={headshot} alt="Noah Ivers Headshot" />
        </div>
      </div>
      {/* <JourneyMap /> */}
    </div>
  );
}

export default Main;