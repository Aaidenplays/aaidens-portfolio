import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <div className='nav container'>
                <div className="row nav-elements">
                    <div className="col nav-element">
                        <a href='#About'>About</a>
                    </div>
                    <div className="col nav-element">
                        <a href='#Experience'>Experience</a>
                    </div>
                    <div className="col nav-element">
                        <a href='#Projects'>Projects</a>
                    </div>
                    <div className="col nav-element">
                        <a href='#Contact'>Contacts</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar
