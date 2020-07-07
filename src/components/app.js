import React, { Component } from 'react';
import NameInfo from './NameInfo';
import Navbar from './Navbar';
import Bio from './Bio'
import Experience from './Experience';
import { SocialIcon } from 'react-social-icons';
import Project from './Project';



export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Navbar />
        <div className="container">
          <div className="row justify-dontent-between about">
            <div className="col-6 ">
              <NameInfo />
              <img className="bio-pic" src={require("../../static/assets/pictures/AW201921.jpg")}/>
            </div>
            <div className="col-5">
              <div className="social-media">
                <SocialIcon url="https://github.com/Aaidenplays" /> 
                <SocialIcon url="https://linkedin.com/in/aaiden-witten/" /> 
                <SocialIcon url="https://dev.to/aaidenplays"/> 
              </div>
              <Bio />
              {/* <Experience /> */}
            </div>
          </div>
          <div className="row">
            <Project />
          </div>
          <div className="row">
            <Experience />
          </div>
        </div>
      </div>
    );
  }
}
