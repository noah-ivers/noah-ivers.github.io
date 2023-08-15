import React from 'react';
import "../styles/skills.css"
import mytechstack from '../assets/Tech_Stack';
import umich from '../assets/Umich_Seal.png';

function Skills() {

	return (
		<div>
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
                                Contructing the back end of web applications using Python and its Flask library for client side projects and 
                                    Django library for server side projects
                                
                            </li>
                            <li className='stacklist'>
                                 Writing concise and efficient SQL queries to link back end functionality and well designed databases
                                
                            </li>
                            <li className='stacklist'>
                                 Creating responsive and accessible user interfaces using React, Javascript, HTML/CSS, Jquery, and 
                                    Bootstrap that interact with back end technologies while maintaining a polished design
                                
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
                <h5 className='goblue'>
                    (This Section Can't Be Green, Go Blue)
                </h5>
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