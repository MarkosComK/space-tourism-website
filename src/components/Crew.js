import React from 'react'
import douglasImg from '../assets/crew/image-douglas-hurley.webp'
import '../css/crew.css'

function Crew() {
    return (
        <section className="section2-container">
            <div className="sec2-content-wrapper">
                <div className="text-content">
                    <h2><span>02</span> Meet your crew</h2>
                    <h3>Commander</h3>
                    <h4>Douglas Hurley</h4>
                    <p>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
                    <div className="sec1-bullets">
                        <div className="bullet1"></div>
                        <div className="bullet2"></div>
                        <div className="bullet3"></div>
                        <div className="bullet4"></div>
                    </div>
                </div>
                <div className="crew-img">
                    <img src={douglasImg} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Crew
