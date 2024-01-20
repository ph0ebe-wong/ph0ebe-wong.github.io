
import gsap from 'gsap';
import React, { useEffect, useRef } from "react";
import './Styling/Home.css';
import StarsCanvas from "./galaxy";

const Rocket = () =>{


return (
    <>
        <div class="box-canvas">
            <div class="wing left"></div>
            <div class="wing right"></div>
            <div class="rocket">
                <div class="main">
                    <div class="window">Github</div>
                </div>
            </div>
            <div class="flame-outer">
                <div class="flame-inner"></div>
                </div>
            <div class="wing-center"></div>
        </div>
    </>
)
}
export default Rocket 