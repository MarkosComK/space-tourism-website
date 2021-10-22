import React from 'react'
import '../css/header.css'

function Header() {
    return (
        <div>
            <header>
                <div className="app-header">
                    <div className="icon"></div>
                    <div className="line"></div>
                    <div className="links-container">
                        <div className="ul-container">
                            <ul>
                                <li><a href="#"><span>00</span> Home</a></li>
                                <li><a href="#"><span>01</span> Destination</a></li>
                                <li><a href="#"><span>02</span> Crew</a></li>
                                <li><a href="#"><span>03</span> Tecnology</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header
