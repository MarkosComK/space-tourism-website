import React from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'

import '../css/navbar.css'

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="app-header">
                        <div className="icon"></div>
                        <div className="line"></div>
                        <div className={this.state.clicked ? "links-container": "links-container links-container-active"}>
                            <div className="ul-container">
                                <ul>
                                    <li><Link to='/' onClick={this.handleClick}><span>00</span> Home</Link></li>
                                    <li><Link to='/destination' onClick={this.handleClick}><span>01</span> Destination</Link></li>
                                    <li><Link to='/crew' onClick={this.handleClick}><span>02</span> Crew</Link></li>
                                    <li><Link to='/tecnology' onClick={this.handleClick}><span>03</span> Tecnology</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div onClick={this.handleClick} className={this.state.clicked ? "svg-x" :"svg-hamburguer" }>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default Navbar
