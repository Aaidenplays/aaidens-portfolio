import React, { Component } from 'react'

export class Experience extends Component {
    render() {
        return (
                <div className="experience-container">
                    <h1><a id='Experience' className="row exp-title" >Experience</a></h1>
                    <div className="row exp-rw">
                            <div className="exp-desc-left">

                            </div>
                            <img className="exp-pic col" src={require("../../static/assets/pictures/Etudes-logo.png")}/>
                            <img className="exp-pic col" src={require("../../static/assets/pictures/Flatiron-logo.jpg")}/>
                            <div className="exp-desc-right">

                            </div>
                    </div>
                    <div className="row exp-rw">
                            <div className="exp-desc-left">

                            </div>
                            <img className="exp-pic col" src={require("../../static/assets/pictures/UTSA-logo.jpg")}/>
                            <img className="exp-pic col" src={require("../../static/assets/pictures/Terry-logo.png")}/>
                            <div className="exp-desc-right">

                            </div>
                    </div>
                </div> 
        )
    }
}

export default Experience