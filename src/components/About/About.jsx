import React from "react";
import './about.css';
import avatar from './avatar.gif';
// import profileborder from './avatarbordershiny.png';
import sakura from './sakura.png';
import profilepic from './profilepicsq1.png';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import {RiComputerLine, RiH6} from 'react-icons/ri';
import {FaCogs} from 'react-icons/fa';
import {GiCash} from 'react-icons/gi';

function About() {

    return (
        <div className="container-about">
            <div className='box'>
                <h1> PROFILE
                    <img src={avatar} id="avatar" width='2px' height='2px' alt='pixel-avatar' />
                </h1>
                <div className="profile-photo">
                    <img src="https://cdn.dribbble.com/users/3151485/screenshots/19212738/media/b2b4e72c2eb425422917bab9f7e69000.png?compress=1&resize=400x300&vertical=top" id="profile-border" width="30vh" alt="border"></img>
                    {/* <img src={profileborder} id="profile-border-2"></img> */}
                    <img src={profilepic} id="profile-pic"></img>
                    <h3>KOH SHERLYNN PHYLLISA </h3>
                    <img src={sakura} id="sakura-bot" alt='sakura border bot'></img>
                    <img src={sakura} id="sakura-top" alt='sakura border top'></img>
                    <div className="socials">
                        <a href="https://github.com/sherphy" target="_blank" id="github">
                            <AiFillGithub size="60%" color="#303231" />
                            <h6> GitHub </h6>
                        </a>
                        <a href="https://www.linkedin.com/in/sherlynnphyllisa/" target="_blank" id="linkedin">
                            <AiFillLinkedin size="60%" color="#303231"></AiFillLinkedin>
                            <h6> LinkedIn </h6>
                        </a>
                    </div>
                </div>
                <div className="text-section">
                    {/* <h1>SERVER: SINGAPORE</h1>
                    <h1> AGE:23 </h1> */}
                    <div className="badge-section">
                        <h1>BADGES</h1>
                        <div className="nus">
                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/NUS_coat_of_arms.svg/1200px-NUS_coat_of_arms.svg.png" className="badge"/>
                            <h6> <span id="fullname-nus"> NATIONAL UNIVERSITY OF SINGAPORE</span> </h6>
                            <div className="text-sect">
                                <h6> <span style={{ color: 'lightcoral' }}> ❀ </span> Bachelor of Engineering (Hons) in Civil Engineering
                                    <br /> <span style={{ color: 'lightcoral' }}> ❀ </span>  Double Major in Innovation Design
                                    <br /> <span style={{ color: 'lightcoral' }}> ❀ </span>  Tembusu College Programme </h6>
                            </div>
                        </div>
                        <div className="skills">
                        <h1>SKILLS</h1>
                            <div className="skills-section">
                                <div className="programming">
                                    <h1> <RiComputerLine className="skill-icon" /> PROGRAMMING <RiComputerLine className="skill-icon" /></h1>
                                    <div className="subsection">
                                        <h6> Java | C | CSS/HTML/JS | SQL </h6>
                                        <h6> Python | Solidity | Selenium </h6>
                                        <h6> React | Firebase | Figma | AWS </h6>
                                        <h6> Fullstack | IoT </h6>
                                    </div>
                                </div>
                                <div className="engineering">
                                    <h1> <FaCogs className="skill-icon" /> ENGINEERING <FaCogs className="skill-icon" /></h1>
                                    <div className="subsection">
                                        <h6> Transport | Hydraulic | Project </h6>
                                        <h6> Environment | Structural | Geotech </h6>
                                        <h6> AutoDesk | MATLAB | ETABS | MSProject </h6>
                                    </div>
                                </div>
                                <div className="finance">
                                    <h1> <GiCash className="skill-icon"/>BUSINESS<GiCash className="skill-icon"/> </h1>
                                    <div className="subsection">
                                        <h6> Patents | VC | M&A | SEO/SEM</h6>
                                        <h6> <span id="two-word">Financial Statements </span> </h6>
                                        <h6> Google Adwords | PatSnap | Questel</h6>
                                    </div>
                                    <h6> </h6>
                                </div>
                                {/* next do grid of white translucent rounded boxes w github linkedin animation  */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About