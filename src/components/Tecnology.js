import React, {useState} from 'react'
import launchImg from '../assets/technology/image-launch-vehicle-portrait.jpg'
import spaceportImg from '../assets/technology/image-spaceport-portrait.jpg'
import capsuleImg from '../assets/technology/image-space-capsule-portrait.jpg'
import '../css/tecnology.css'


function Tecnology() {
    const vehicle = {
        color: '',
        img: launchImg,
        h4: 'Launch Vehicle',
        p: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    }
    const spaceport = {
        img: spaceportImg,
        h4: 'Spaceport',
        p: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    }
    const capsule = {
        img: capsuleImg,
        h4: 'Space Capsule',
        p: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    }

  

    const [content, setContent] = useState(vehicle)


    const setVehicle = () => {
        setContent(vehicle)


    }

    const setSpaceport = () => {
        setContent(spaceport)

    }

    const setCapsule = () => {
        setContent(capsule)
    }
    // set button color on click


    return (
        <div>
            <section className="section3-container">
                <div className="sec3-content-wrapper">
                    <div>
                        <div className="sec3-text-content">
                            <h2><span>03</span> Space Launch 101</h2>
                            <div className="sec3-bullets-text">
                                <div className="sec3-bullets-nav">
                                    <div className="sec3-bullet1" onClick={setVehicle}>1</div>
                                    <div className="sec3-bullet2" onClick={setSpaceport}>2</div>
                                    <div className="sec3-bullet3" onClick={setCapsule}>3</div>
                                </div>
                                <div>
                                    <h3>THE TERMINOLOGY…</h3>
                                    <h4>{content.h4}</h4>
                                    <p>{content.p}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sec3-img">
                        <img src={content.img} alt="" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Tecnology
