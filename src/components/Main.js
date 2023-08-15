import React from 'react';
import "../styles/main.css"
import headshot from "../assets/headshot.jpg";

function Main() {

	return (
		<div>
            <div className="openingContainer">
                    <div className="openingText">
                        <h1 className='introHeader'>
                            I'm Noah Ivers
                        </h1>
                        <p className='introPara'>
                        An aspiring Full-Stack Developer with experience building web applications for small business' and individual clients
                        </p>
                    </div>
                <div className="openingPicture">
                <img className="headshotPhoto" src={headshot} alt="Noah Ivers Headshot"/>
                </div>
            </div>
		</div>
	);
}

export default Main