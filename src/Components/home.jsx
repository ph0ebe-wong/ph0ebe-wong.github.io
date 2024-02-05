import React from "react";
import './Styling/Home.css';
import AboutMe from "./aboutme";
import Landing from "./landing";
import Experience from "./experience";
import Projects from "./projects";
import Rocket from "./home_rocket";

const Home = () =>{
    return (
        <>
            <Landing />
            <AboutMe />
            <Rocket />
        </>
    )
}
export default Home 