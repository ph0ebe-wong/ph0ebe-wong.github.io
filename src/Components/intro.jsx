import React from "react";
import './Styling/Home.css';
import fingerprint_bg from './Assets/fingerprint_background.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Skills from "./skills";
import {useMediaQuery} from '@react-hook/media-query'




const Intro = () =>{
    const socials = [
        {social: 'Github', url: 'https://github.com/ph0ebe-wong', icon: GitHubIcon, username: 'ph0ebe-wong', color: '#6e5494' }, 
        {social: 'Linkedin', url: 'https://www.linkedin.com/in/phoebe-wong/', icon: LinkedInIcon, username: 'phoebe-wong', color: '#0a66c2'}
    ]

    const isSmallMobile = useMediaQuery('only screen and (max-width: 450px)');
    const isSmallHeightMobile = useMediaQuery('only screen and (max-height: 720px) and (max-width: 540px)');


    return (
        <>
        {
            isSmallMobile ||  isSmallHeightMobile ? (
                <div className="div-container" style={{flexDirection: 'column', }} >
                    <div class="typing-demo" style={{fontSize: '1.2em'}}>
                        Hello, I am Phoebe Wong
                    </div>

                    <p class='intro-text' style={{fontSize: 15, textAlign:'center'}}>
                        and I am a Cybersecurity and Digital Forensics enthusiast from Nanyang Polytechnic, 
                        graduating in 2024. With a background in full-stack development and cloud computing, 
                        I aim to specialize in cyber forensics. I'm dedicated to making a meaningful impact in cybersecurity 
                        and keen on exploring cutting-edge solutions in cyber forensic investigations.
                    </p>
                    <img class='intro-bg' alt="Introduction Fingerprint Background" src={fingerprint_bg} />
                    <div class='intro-social-container' style={{justifyContent:'center'}}>
                        {
                            socials.map((social, index) => (
                                <button key={index} style={{width: 250}} onClick={() => {window.open(social.url, "_blank");}} className="social-btn"> < social.icon style={{color: social.color , width: 25, height:25}} /> <p>/{social.username}</p></button>
                            ))
                        }
                    </div>
                    
                </div>

            ):(
                <div className="div-container"  >
                    <div class='intro-container'>
                        <div class='intro-content'>
                            <div class="typing-demo">
                            Hello, I am Phoebe Wong
                            </div>
                            <p class='intro-text'>
                            and I am a Cybersecurity and Digital Forensics enthusiast from Nanyang Polytechnic, 
                            graduating in 2024. With a background in full-stack development and cloud computing, 
                            I aim to specialize in cyber forensics. I'm dedicated to making a meaningful impact in cybersecurity 
                            and keen on exploring cutting-edge solutions in cyber forensic investigations.
                            </p>
                            <div class='intro-social-container'>
                                {
                                    socials.map((social, index) => (
                                        <button key={index} onClick={() => {window.open(social.url, "_blank");}} className="social-btn"> < social.icon style={{color: social.color , width: 25, height:25}} /> <p>/{social.username}</p></button>
                                    ))
                                }
                            </div>
                    </div>
                    <img class='intro-bg' alt="Introduction Fingerprint Background" src={fingerprint_bg} />
                    </div>
                </div>

            )
        }
            <Skills />
        
        </>
    )
}
export default Intro 