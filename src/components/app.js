import React, { Component } from 'react';
import NameInfo from './NameInfo';
import Navbar from './Navbar';
import Bio from './Bio'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Experience from './Experience';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Navbar />
        <div className="container">
          <div className="row justify-dontent-between about">
            <div className="col-6 ">
              <NameInfo />
            </div>
            <div className="col-5">
              <Bio />
              {/* <Experience /> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
