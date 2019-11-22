import React, { Component } from 'react'
import UpdateSongForm from './UpdateSongForm'
import welcome from '../images/backgroundnewpic.png'

export class Welcome extends Component {
  render() {
    return (
      <div className='welcome-Layout'>
          <img className='welcome-Photo' src={welcome} alt='welcome'></img>
          {/* <p>Your go-to for msuic download</p>
          <h2>MAKE IT YOURS</h2> */}

        
      </div>
    )
  }
}

export default Welcome
