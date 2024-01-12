import React, {useEffect, useRef} from "react";
import './Styling/Home.css'
import StarsCanvas from "./galaxy";
import gsap, { TimelineMax, Power4, Power3 } from 'gsap'; 

const Home = () =>{

    const Name = 'Phoebe Wong';
    const line1Ref = useRef(null);
    const line2Ref = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();
        tl.to([line1Ref.current, line2Ref.current ], {duration: 2, height: 300, ease: "power4.easeInOut"})
          .to([line1Ref.current, line2Ref.current], {duration: 2, rotation: 35}, "-=0.5")
          .to(line1Ref.current, {duration: 2.5, left: 196, ease: "power4.easeInOut"})
          .to(line2Ref.current, {duration: 2.5, left: 476, ease: "power3.easeInOut"}, "-=2.5")
        //   .to(textRef.current, { duration: 5, width: 230, marginLeft: 175, ease: "power4.easeInOut", onStart: () => gsap.set(textRef.current, { visibility: 'visible' })});
        // .fromTo(textRef.current, { scale: 0, transformOrigin: 'center' }, { duration: 1, scale: 1, ease: "power3.easeInOut", onStart: () => gsap.set(textRef.current, { visibility: 'visible' })});    
        .fromTo(textRef.current, 
            { width: 0,  visibility: 'hidden', rotation: 35, transformOrigin: 'center', left: 217 }, 
            { duration: 2.5, width: 230, transformOrigin: '0% 0%', left: 115,  ease: "power3.linear", onStart: () => gsap.set(textRef.current, { visibility: 'visible' }) }, "-=2.5");    
}, []);

return (
    <>
        <StarsCanvas />
        <div className="name-container">
            
            <div className="name-line name-line-1" ref={line1Ref}></div>
            <div className="name-line name-line-2" ref={line2Ref}></div>
            <div className="name-text" ref={textRef}><span className="name-span">{Name}</span></div>
        </div>
    </>
)
}
export default Home 