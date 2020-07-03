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
        <Accordion defaultActiveKey='0'>
          <Card className="acc">
            <Card.Header>
              <CustomToggle eventKey='0'>Online Music Academy</CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey='0'>
              <Card.Body >
              <ReactPlayer url={this.demoVideos.musicAcademy} />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="acc">
            <Card.Header>
              <CustomToggle eventKey='1'>Jamdom</CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey='1'>
              <Card.Body>
              <ReactPlayer url={this.demoVideos.jamdom} />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="acc">
            <Card.Header>
              <CustomToggle eventKey='2'>MemoryIron</CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey='2'>
              <Card.Body>
              <ReactPlayer url={this.demoVideos.memoryIron} />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    )
  }
}

export default Experience

