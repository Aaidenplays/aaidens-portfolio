import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import CustomToggle from './CustomToggle'
import ReactPlayer from 'react-player';


export class Experience extends Component {

    demoVideos = {
        musicAcademy: "https://www.youtube.com/watch?v=Qtof0wG2teg",
        jamdom: "https://www.youtube.com/watch?v=nqc8sN9ZX20",
        memoryIron: "https://www.youtube.com/watch?v=qZb-kXapleE&feature=youtu.be"
    };

  render () {
    return (
      <div className='project-container'>
        <h1>
          <a id='Projects' className='projects-title'>
            Projects
          </a>
        </h1>
        <Accordion >
          <Card className="acc">
            <Card.Header>
              <CustomToggle eventKey='0'>Online Music Academy</CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey='0'>
              <Card.Body >
              <div className="row">
                <div className="col-md-4">
                    <div className="tech-container">
                        <div className="scrolling-techs">
                            <img className="tech-pic col" src={require("../../static/assets/pictures/RoR-logo.png")}/>
                            <img className="tech-pic col" src={require("../../static/assets/pictures/React-logo.png")}/>
                            <img className="tech-pic col" src={require("../../static/assets/pictures/Postgresql-logo.jpg")}/>
                            <img className="tech-pic col" src={require("../../static/assets/pictures/ReactBoot-logo.png")}/>
                        </div>
                    </div>
                    <div className="proj-desc">
                        <h3>An app to help music instructors assign video challenges for their students.</h3><br/>
                        <ul>
                            <li>Utilized a React frontend to create a modern look and feel to the program</li><br/>
                            <li>Implemented authentication with HTTP web tokens allowing users to sign-up and sign-in</li><br/>
                            <li>Incorporated react-bootstrap for styling the web app</li><br/>
                            <li>Built a Rails API to persist data in the backend</li><br/>
                        </ul>
                    </div>
                </div>               
                <div className="col-md-7">
                    <ReactPlayer url={this.demoVideos.musicAcademy} />
                </div>
              </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="acc">
            <Card.Header>
              <CustomToggle eventKey='1'>Jamdom</CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey='1'>
              <Card.Body>
              <div className="row">
              <div className="col-md-4">
                    <div className="tech-container">
                        <div className="scrolling-techs">
                            <img className="tech-pic col" src={require("../../static/assets/pictures/RoR-logo.png")}/>
                            <img className="tech-pic col" src={require("../../static/assets/pictures/React-logo.png")}/>
                            <img className="tech-pic col" src={require("../../static/assets/pictures/Postgresql-logo.jpg")}/>
                            <img className="tech-pic col" src={require("../../static/assets/pictures/ReactBoot-logo.png")}/>
                        </div>
                    </div>
                    <div className="proj-desc">
                        <h3>An app to help music instructors assign video challenges for their students.</h3><br/>
                        <ul>
                            <li>Utilized a React frontend to create a modern look and feel to the program</li><br/>
                            <li>Implemented authentication with HTTP web tokens allowing users to sign-up and sign-in</li><br/>
                            <li>Incorporated react-bootstrap for styling the web app</li><br/>
                            <li>Built a Rails API to persist data in the backend</li><br/>
                        </ul>
                    </div>
                </div>               
                <div className="col-md-7">
                    <ReactPlayer url={this.demoVideos.jamdom} />
                </div>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="acc">
            <Card.Header>
              <CustomToggle eventKey='2'>MemoryIron</CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey='2'>
              <Card.Body>
              <div className="row">
                <div className="col-md-4">
                    <div className="tech-container">
                        <div className="scrolling-techs">
                            <img className="tech-pic col" src={require("../../static/assets/pictures/RoR-logo.png")}/>
                            <img className="tech-pic col" src={require("../../static/assets/pictures/React-logo.png")}/>
                            <img className="tech-pic col" src={require("../../static/assets/pictures/Postgresql-logo.jpg")}/>
                            <img className="tech-pic col" src={require("../../static/assets/pictures/ReactBoot-logo.png")}/>
                        </div>
                    </div>
                    <div className="proj-desc">
                        <h3>An app to help music instructors assign video challenges for their students.</h3><br/>
                        <ul>
                            <li>Utilized a React frontend to create a modern look and feel to the program</li><br/>
                            <li>Implemented authentication with HTTP web tokens allowing users to sign-up and sign-in</li><br/>
                            <li>Incorporated react-bootstrap for styling the web app</li><br/>
                            <li>Built a Rails API to persist data in the backend</li><br/>
                        </ul>
                    </div>
                </div>       
                    <div className="col-md-7">
            
                        <ReactPlayer url={this.demoVideos.memoryIron} />
                    </div>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    )
  }
}

export default Experience

