import React, {useState} from 'react'
import douglasImg from '../assets/crew/image-douglas-hurley.webp'
import markImg from '../assets/crew/image-mark-shuttleworth.webp'
import victorImg from '../assets/crew/image-victor-glover.webp'
import ansariImg from '../assets/crew/image-anousheh-ansari.webp'
import '../css/crew.css'

function Crew() {
    const douglas = {
        img: douglasImg,
        h3: 'Commander',
        h4: 'Douglas Hurley',
        p: 'Douglas Gerald Hurley is an American engineer, former Marine Corps  pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.'
    }
    const mark = {
        img: markImg,
        h3: 'Mission Specialist',
        h4: 'Mark Shuttleworth',
        p: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.'
    }
    const victor = {
        img: victorImg,
        h3: 'Pilot',
        h4: 'Victor Glover',
        p: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. '
    }
    const ansari = {
        img: ansariImg,
        h3: 'Flight Engineer',
        h4: ' Anousheh Ansari',
        p: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. '
    }


    const [content, setContent] = useState(douglas)

    const setDouglas = () => {
        setContent(douglas)
    }

    const setMark = () => {
        setContent(mark)
    }

    const setVictor = () => {
        setContent(victor)
    }
    const setAnsari = () => {
        setContent(ansari)
    }

    return (
        <section className="section2-container">
            <div className="sec2-content-wrapper">
                <div>
                    <div className="text-content">
                        <h2><span>02</span> Meet your crew</h2>
                        <h3>{content.h3}</h3>
                        <h4>{content.h4}</h4>
                        <p>{content.p}</p>
                    </div>
                    <div className="sec1-bullets">
                        <div className="bullet1" onClick={setDouglas}></div>
                        <div className="bullet2" onClick={setMark}></div>
                        <div className="bullet3" onClick={setVictor}></div>
                        <div className="bullet4" onClick={setAnsari}></div>
                    </div>
                </div>
                <div className="crew-img">
                    <img src={content.img} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Crew
