import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <div className='nav'>
                <ul>
                    <li> <a href='#about'>About</a></li>
                    <li>Experience</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
        )
    }
}

export default Navbar
