import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <div className='nav container'>
                <div className="row nav-elements">
                    <div className="col nav-element">
                        <a className="btn from-center" href='#About'>About</a>
                    </div>
                    <div className="col nav-element">
                        <a className="btn from-center" href='#Experience'>Experience</a>
                    </div>
                    <div className="col nav-element">
                        <a className="btn from-center" href='#Projects'>Projects</a>
                    </div>
                    <div className="col nav-element">
                        <a className="btn from-center" href='#Contact'>Contacts</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar
