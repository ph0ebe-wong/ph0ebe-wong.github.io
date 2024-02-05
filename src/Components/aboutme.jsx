import React from "react";
import asteriods from './Assets/asteriods.png';
import './Styling/Home.css';
import MoonCanvas from "./moon";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const AboutMe = () =>{

    const socials = [
        {social: 'Github', url: 'https://github.com/ph0ebe-wong', icon: GitHubIcon, username: 'ph0ebe-wong' }, 
        {social: 'Linkedin', url: 'https://www.linkedin.com/in/phoebe-wong/', icon: LinkedInIcon, username: 'phoebe-wong' }
    ]

    

return (
    <>
        <div className="about-me-div">
            <MoonCanvas />
            <div className="about-me">
                <h2 className="about-me-header">About Me</h2>
                <p className="about-me-desc">I'm Phoebe Wong, a Cybersecurity and Digital Forensics enthusiast from Nanyang Polytechnic, graduating in 2024. 
                    My ambition is to carve a niche in the realm of cyber forensics.
                    I'm dedicated to making a meaningful impact in cybersecurity and keen on exploring cutting-edge solutions in cyber forensic investigations.
                </p>

                
                <div className="all-social-div">
                    {
                        socials.map((social) => (
                            <div className="social-div">
                                <button class="btn-class-name" onClick={() => {window.open(social.url, "_blank");}}>
                                    <span class="back"></span>
                                    <span class="front">
                                        < social.icon style={{color: '#a34141', width: 35, height:35}} />
                                    </span>
                                </button>
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