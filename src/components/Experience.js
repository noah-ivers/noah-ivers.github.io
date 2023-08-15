import React from 'react';
import "../styles/experience.css"
import solaris from "../assets/SolarisLogo.png"
import logo from "../assets/Mylogo.jpg"
import TEK from "../assets/teklogo.png"

function Experience() {

	return (
		<div>
            <h2 className='experienceTitle'> Experience </h2>
            <h3 className='whereText' > Where I've Worked </h3>
            <div className='workContainer'>
                <div className='solarisBox'>
                    <h3 className='Employer'> Solaris Renewables </h3>
                    <img className='employerLogoSolaris' src={solaris} alt='solaris logo' />
                    <h4 className='position'> Web-Development Intern </h4>
                    <p className='work'>
                        During my time at Solaris Renewables I was able to work closely with the marketing team, 
                        transforming their website to match their creative visions using HTML/CSS and JavaScript
                    </p>
                </div>
                    <div className='freelanceBox'>
                        <h3 className='Employer'> Freelance Web-Devlopment </h3>
                        <img className='employerLogoFreelance' src={logo} alt='freelance logo' />
                        <h4 className='position'> Web-Developer </h4>
                        <p className='work'>
                            As a freelance web-developer I have been able to help clients translate their designs into fully functional websites using React and Bootstrap
                        </p>
                    </div>
                
            </div>
            <h3 className='whereText' > What I've Built </h3>
                <div className='projectsContainer'>
                    <div className='projects'>
                        <h4 className='position'> Mock Instagram </h4>
                        <ul className='projectList'>
                            <li className='listText'>
                            Created a responsive React JS UI with features like post interactions and user actions. 
                            Implemented a reliable Flask-based REST API for efficient data manipulation and retrieval in JSON format.
                            </li>
                        </ul>
                    </div>
                    <div className='projects'>
                        <h4 className='position'> Search Engine </h4>
                        <ul className='projectList'>
                            <li className='listText'>
                                Successfully implemented segmented inverted index creation for web pages using MapReduce, showcasing expertise in text and link analysis. Developed a scalable Index server with REST API in Flask, 
                                offering Google-like search UI for dynamic pages with JSON search result outputs.
                            </li>
                        </ul>
                    </div>
                    <div className='projects'>
                        <h4 className='position'> Mapreduce Framework </h4>
                        <ul className='projectList'>
                            <li className='listText'>
                            Built a fault tolerant mapreduce framework using distributed systems, 
                            OS-provided concurrency facilities (threads and processes), and networking (sockets).
                            Implemented  “worker” and “manager” classes that would communicate with each other using TCP and UDP sockets.
                            </li>
                        </ul>
                    </div>
                </div>
                <h3 className='whereText'> Where I've Lead </h3>
                <div className='leaderContainer'>
                    <div className='tekText'>
                        <h4 className='position'> Tau Epsilon Kappa </h4>
                        <p className='tekPara'>
                        In March 2022 I officially founded Tau Epsilon Kappa, a CO-ED professional technology fraternity. 
                        As the founding president I was able to recruit 70+ other members who believed in my vision of a club 
                        that could foster friendships and professional opportunities for students that were looking to break into the tech field. 
                        Watching the fraternity grow, more academic and professional events be offered, and members becoming close friends has 
                        made all the effort put in worth it.
                        </p>
                    </div>
                    <div className='tekPhoto'>
                        <a className='tekLink' href='https://tauepsilonkappa.com/'>
                            <img className='teklogo' src={TEK} alt='TEK logo'/>
                        </a>
                    </div>
                </div>
		</div>
	);
}

export default Experience