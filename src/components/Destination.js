import React, { useState } from 'react'
import moonImg from '../assets/destination/image-moon.webp'
import marsImg from '../assets/destination/image-mars.webp'
import europaImg from '../assets/destination/image-europa.webp'
import titanImg from '../assets/destination/image-titan.webp'
import '../css/destination.css'


function Destination() {

    const contentMoon = {
        img: moonImg,
        h2: 'Moon',
        h2p: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
        h31: 'Avg. Distance',
        h31p: '384,400 km',
        h32: 'Est. Travel time',
        h32p: '3 Days'
    }
    const contentMars = {
        img: marsImg,
        h2: 'Mars',
        h2p: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
        h31: 'Avg. Distance',
        h31p: '225 MIL. km',
        h32: 'Est. Travel time',
        h32p: '9 months'
    }
    const contentEuropa = {
        img: europaImg,
        h2: 'Europa',
        h2p: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
        h31: 'Avg. Distance',
        h31p: '628 MIL. km',
        h32: 'Est. Travel time',
        h32p: '3 years'
    }

    const contentTitan = {
        img: titanImg,
        h2: 'Titan',
        h2p: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
        h31: 'Avg. Distance',
        h31p: '1.6 BIL. km',
        h32: 'Est. Travel time',
        h32p: '7 years'
    }

    const [content, setContent] = useState(contentMoon)

    const setMoon = () => {
        setContent(contentMoon)
    }

    const setMars = () => {
        setContent(contentMars)
    }

    const setEuropa = () => {
        setContent(contentEuropa)
    }

    const setTitan= () => {
        setContent(contentTitan)
    }

    return (
        <section className="section1-container">
            <h5><span>01</span> Pick up your destination</h5>
            <div className="sec1-responsive-div">
                <div className="sec1-image">
                    <img src={content.img} alt="" />
                </div>
                <div className="sec1-content">
                    <div className="sec1-navigation">
                        <ul className="sec1-links">
                            <li>
                                <span onClick={setMoon}>Moon</span>
                            </li>
                            <li>
                                <span onClick={setMars}>Mars</span>
                            </li>
                            <li>
                                <span onClick={setEuropa}>Europa</span>
                            </li>
                            <li>
                                <span onClick={setTitan}>Titan</span>
                            </li>
                        </ul>
                        <div className="sec1-text-container">
                            <h2>{content.h2}</h2>
                            <p>{content.h2p}</p>
                            <div className="sec1-line"></div>
                            <div className="text-underline">
                                <div>
                                    <h3>{content.h31}</h3>
                                    <p>{content.h31p}</p>
                                </div>
                                <div>
                                    <h3>{content.h32}</h3>
                                    <p>{content.h32p}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Destination
