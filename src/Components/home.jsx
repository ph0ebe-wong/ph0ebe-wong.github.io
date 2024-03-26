import React, {useEffect} from "react";
import './Styling/Home.css';
import Achievement from "./achievement";
import Experience from "./experience";
import Intro from "./intro";
import Projects from "./projects";
import Skills from "./skills";
import Contact from "./contact";


const Home = () =>{
    return (
        <div style={{background: 'black'}} >
            <div id="home"><Intro /></div>
            <div id="experience"><Experience /></div>
            <div id="projects"><Projects /></div>
            <div id="achievements"><Achievement /></div>
            <div id="contact"><Contact /></div>        
        </div>
    )
}
export default Home 