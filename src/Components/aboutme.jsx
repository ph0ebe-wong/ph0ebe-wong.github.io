import React from "react";
import asteriods from './Assets/asteriods.png';
import './Styling/Home.css';
import MoonCanvas from "./moon";
import Rocket from "./rocket";

const AboutMe = () =>{

    const socials = [
        {social: 'Github', url: 'https://github.com/ph0ebe-wong'}, 
        {social: 'Linkedin', url: 'https://www.linkedin.com/in/phoebe-wong/'}
    ]

return (
    <>
        <div className="about-me-div">
            <MoonCanvas />
            <div className="about-me">
                <h2 >About Me</h2>
                <p>I'm Phoebe Wong, a Cybersecurity and Digital Forensics enthusiast from Nanyang Polytechnic, graduating in 2024. 
                    With a background in full-stack development and cloud computing, I aim to specialize in cyber forensics. My experiences, ranging from a business analytics internship to innovative project work, fuel my passion for using technology in safeguarding digital spaces. 
                    I'm dedicated to making a meaningful impact in cybersecurity and keen on exploring cutting-edge solutions in cyber forensic investigations.
                </p>
                <div className="all-social-div">
                    {
                        socials.map((social) => (
                            <div className="social-div">
                                <img className="social-img" src={asteriods} alt="Social Media" />
                                <div className="social-name" onClick={() => {window.open(social.url, "_blank");}}>
                                    {social.social} 
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </>
)
}
export default AboutMe 