import React from 'react';
import "../styles/skills.css"
import mytechstack from '../assets/Tech_Stack';
import umich from '../assets/Umich_Seal.png';

function Skills() {

	return (
		<div id="about" >
            <div>
                <h2 className='title'> About Me </h2>
            </div>
            <div className='sections'>
                <div className='stackExpo'>
                    <h3 className='stackh2'>
                        My Tech Stack
                    </h3>
                        <ul className='stackListContainer'>
                            <li className='stacklist'>
                                Building full-stack web apps with TypeScript/JavaScript (Angular, React) and Java (Spring Boot), plus Python (Flask, Django)
                            </li>
                            <li className='stacklist'>
                                Designing and shipping cloud features on Google Cloud Platform, including Firestore-backed APIs and secure deployments
                            </li>
                            <li className='stacklist'>
                                Quality + security focused development with Git, Jasmine unit tests, SonarQube, and 42Crunch
                            </li>
                            <li className='stacklist'>
                                Data visualization and mapping interfaces using MapLibre and Three.js, plus SQL for data access
                            </li>
                        </ul>
                </div>
                <div className='stackContainer'>
                        {mytechstack.languages.map((languages, i) => {
                        return (
                            <div className='stack'>
                                <img className='logos' src={languages.picture} alt='Programming Language Icon'/>
                                <p className='stackText'>{languages.language}</p>
                            </div>
                    );
                    })}
                </div>
            </div>
            <div>
                <h3 className='edutitle'>
                    Education
                </h3>
                <div className='eduContainer'>
                    <div className='eduPic'>
                        <img className='umichPic' src={umich} alt='University of Michigan Seal'/>
                    </div>
                    <div className='eduText'>
                        <h4 className='umichh4'> University of Michigan </h4>
                        <ul className='umichList'>
                            <li className='umichBullet'>
                                September 2020 - April 2024
                            </li>
                            <li className='umichBullet'>
                                Bachelor of Science in Computer Science
                            </li>
                            <li className='umichBullet'>
                                Coursework: Data Structures and Algorithms, Web Systems, Database Management Systems, 
                                Software Engineering, Multivariable And Vector Calculus, Discrete Mathematics, Computer Organization
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
		</div>
	);
}

export default Skills