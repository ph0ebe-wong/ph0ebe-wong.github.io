import React, {useEffect, useRef} from "react";
import './Styling/Home.css'
import StarsCanvas from "./galaxy";
import gsap, { TimelineMax, Power4, Power3 } from 'gsap'; 
import MoonCanvas from "./moon";
import asteriods from './Assets/asteriods.png'
import Asteriods from "./asteriods";

const Home = () =>{

    const Name = 'Phoebe Wong';
    const line1Ref = useRef(null);
    const line2Ref = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();
        tl.to([line1Ref.current, line2Ref.current ], {duration: 2, height: 300, ease: "power4.easeInOut"})
          .to([line1Ref.current, line2Ref.current], {duration: 2, rotation: 35}, "-=0.5")
          .to(line1Ref.current, {duration: 2.5, left: 206, top: 25,  ease: "power4.easeInOut"})
          .to(line2Ref.current, {duration: 2.5, left: 485, top: 25, ease: "power3.easeInOut"}, "-=2.5")
          .fromTo(textRef.current, 
            { width: 0,  visibility: 'hidden', rotation: 35, transformOrigin: 'center', left: 101 }, 
            { duration: 2.5, width: 230, transformOrigin: '0% 0%', left: 94,  ease: "power3.linear", onStart: () => gsap.set(textRef.current, { visibility: 'visible' }) }, "-=2.5");    
}, []);


return (
    <>
        <StarsCanvas />
        <div className="name-div">
                <div className="name-container">
                    
                    <div className="name-line name-line-1" ref={line1Ref}></div>
                    <div className="name-line name-line-2" ref={line2Ref}></div>
                    <div className="name-text" ref={textRef}><span className="name-span">{Name}</span></div>
                </div>
        </div>
        <div className="about-me-div" style={{height: '100vh', background: 'linear-gradient(180deg, #000 0%, #6591D3 78.45%)', display: 'flex', flexDirection: 'row', alignItems:'center'}}>
            <MoonCanvas />
            <div className="about-me" style={{padding: 20, width:'50%'}}>
                <h2>About Me</h2>
                <p>I'm Phoebe Wong, a Cybersecurity and Digital Forensics enthusiast from Nanyang Polytechnic, graduating in 2024. 
                    With a solid background in full-stack development and cloud computing, I aim to specialize in cyber forensics. My experiences, ranging from a business analytics internship to innovative project work, fuel my passion for using technology in safeguarding digital spaces. 
                    I'm dedicated to making a meaningful impact in cybersecurity and keen on exploring cutting-edge solutions in cyber forensic investigations.
                </p>
                <Asteriods social={'Github'}/>
            </div>
        </div>
    </>
)
}
export default Home 