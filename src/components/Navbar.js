import React from 'react'
import { Link } from 'react-router-dom'

import '../css/navbar.css'

function Navbar() {
    return (
        <div>
            <header>
                <nav className="app-header">
                    <div className="icon"></div>
                    <div className="line"></div>
                    <div className="links-container">
                        <div className="ul-container">
                            <ul>
                                <li><Link to='/'><span>00</span> Home</Link></li>
                                <li><Link to='/destination'><span>01</span> Destination</Link></li>
                                <li><Link to='/crew'><span>02</span> Crew</Link></li>
                                <li><Link to='/'><span>03</span> Tecnology</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar
