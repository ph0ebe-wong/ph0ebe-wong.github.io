import React from "react";
import './Styling/Home.css';
import AboutMe from "./aboutme";
import Landing from "./landing";
import Skills from "./skills";
import Experience from "./experience";
import Projects from "./projects";

const Home = () =>{


return (
    <>
        <Landing />
        <AboutMe />
        <Skills />
        {/* <Experience /> */}
        {/* <div style={{height: '100vh', width: '100vh', background: "url('https://i.pinimg.com/736x/cb/ab/1b/cbab1ba45740cbc9e853c17af6503ea7.jpg') no-repeat ", }}>

</div> */}
        <Projects />

    </>
)
}
export default Home 