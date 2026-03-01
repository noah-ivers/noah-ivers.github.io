import React from 'react';
import "../styles/experience.css"
import ford from "../assets/Ford.jpg"
import solaris from "../assets/SolarisLogo.png"
import logo from "../assets/Mylogo.jpg"
import TEK from "../assets/teklogo.png"

function Experience() {

	return (
		<div id="experience" >
            <h2 className='experienceTitle'> Experience </h2>
            <h3 className='whereText' > Where I've Worked </h3>
            <div className='workContainer'>
                <div className='fordBox'>
                    <h3 className='Employer'> Ford Motor Company </h3>
                    <img className='employerLogoFord' src={ford} alt='Ford Motor Company' />
                    <h4 className='position'> Software Engineer (May 2024 - Present) </h4>
                    <ul className='workList'>
                        <li className='workItem'>
                            Contributed to a full-stack internal checklist metrics application, developing Angular features and Java/Spring Boot APIs backed by Firestore in an Agile environment
                        </li>
                        <li className='workItem'>
                            Designed and deployed secure, scalable features on Google Cloud Platform supporting rollout to 15+ global manufacturing plants
                        </li>
                        <li className='workItem'>
                            Built interactive dashboards and visualizations (2D live plant data + 3D views) using MapLibre and Three.js; maintained 80%+ unit test coverage with Jasmine and enforced standards via SonarQube and 42Crunch
                        </li>
                    </ul>
                </div>
                <div className='solarisBox'>
                    <h3 className='Employer'> Solaris Renewables </h3>
                    <img className='employerLogoSolaris' src={solaris} alt='solaris logo' />
                    <h4 className='position'> Web-Development Intern (May 2023 - Aug 2023) </h4>
                    <ul className='workList'>
                        <li className='workItem'>
                            Implemented a Solar Panel Calculator with jQuery + Google Maps / Places / Geocoding APIs to let customers outline their roof on an interactive map and estimate solar panel costs
                        </li>
                        <li className='workItem'>
                            Remodeled the company website to support a seamless rebrand from Revolusun to Solaris
                        </li>
                    </ul>
                </div>
                    <div className='freelanceBox'>
                        <h3 className='Employer'> Freelance Web Development </h3>
                        <img className='employerLogoFreelance' src={logo} alt='freelance logo' />
                        <h4 className='position'> Web Developer (Mar 2023 - May 2024) </h4>
                        <ul className='workList'>
                            <li className='workItem'>
                                Translated design ideas into fully functional and responsive web applications using React and Bootstrap, helping clients showcase products and abilities online
                            </li>
                        </ul>
                    </div>
                
            </div>
            <h3 className='whereText' > What I've Built </h3>
                <div className='projectsContainer'>
                    <div className='projects'>
                        <h4 className='position'> Mock Social Media Platform </h4>
                        <ul className='projectList'>
                            <li className='listText'>
                            Developed a responsive React UI supporting likes, comments, posts, and follow/unfollow. Built a Flask + SQLite3 REST API to create and edit user data via HTTP and return JSON.
                            </li>
                        </ul>
                    </div>
                    <div className='projects'>
                        <h4 className='position'> Euchre Simulator </h4>
                        <ul className='projectList'>
                            <li className='listText'>
                                Developed a fully functional Euchre game in C++, applying object-oriented design, polymorphism, and operator overloading to model cards, packs, and gameplay.
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
                        Founded and established the University of Michigan's second professional technology fraternity, recruiting 70+ active members in one year.
                        Led an executive board of 8, organized interviews and chapter meetings, coordinated student workshops, planned networking events, and delegated responsibilities across multiple vice presidents.
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