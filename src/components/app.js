import React, { Component } from 'react';
import NameInfo from './NameInfo';
import Navbar from './Navbar';


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Navbar />
        <NameInfo />
      </div>
    );
  }
}
