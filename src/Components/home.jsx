import React from "react";
import './Styling/Home.css'

const Home = () =>{

const Name = 'Phoebe Wong'

return (
    <>
        <div style={{position: 'relative', width: '100%', height: '100vh'}}
        class="cont"
        ></div>
            <section class="section-loader">
                <h2 class="section__h2">
                    {Name.split('').map((char, index) => (
                        <span key={index} className="section__span">{char}</span>
                    ))}
                </h2>
            </section>
    </>
)
}
export default Home 