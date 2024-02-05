import React from "react";
import './Styling/rocket.css';
import SkillRocket from "./skill_rocket";
import Experience from "./experience";
import Projects from "./projects";

const Rocket = () =>{

return (
    <>
        <div className="rocket-bg">
            <div className="rocket-body">
                <SkillRocket />
                <div className="rocket-window-rim">
                    <div className="rocket-blue-window">
                        <div className="rocket-first-glare"></div>
                        <div className="rocket-second-glare"></div>
                    </div>
                </div>
                <Experience />
                <Projects />
                <div className="rocket-body-base"></div>            
                </div>
        </div>
    </>
)
}
export default Rocket 