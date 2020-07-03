import React, { Component } from 'react'

export class NameInfo extends Component {
  render () {
    return (
        <div className='name-info'>
        <h1><a id='About' className="about-title" >About</a></h1>
          <h2 className='greeting'>Hello my name is</h2>
          <h1 className='name'>Aaiden Witten</h1>
          <h3 className='greeting-desc1'>
            I am a fullstack web developer
          </h3>
        </div>
    )
  }
}

export default NameInfo
