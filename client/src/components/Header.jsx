import React, { Component } from 'react'
import { withRouter } from 'react-router';


class Header extends Component {
  render() {
    return (
      <div className='header'>
        <h1 className='logo' onClick={() =>{
          this.props.history.push('/');
        }}>BEATSOURCE</h1>
        {
          this.props.currentUser
          ?
          <>
          
          <p className='username'>Hi, {this.props.currentUser.username}</p>
          <a className="logOutHeaderButton" onClick={this.props.handleLogout} >Logout</a>
          <a className="uploadHeaderButton" onClick={() => this.props.history.push('/upload')} >Upload</a>
         
          </>
          :
          
          <a className='loginHeaderButton' onClick={this.props.handleLoginButton}>Login / Register</a>
   
        }
        
      </div>
    )
  }
}

export default withRouter(Header);