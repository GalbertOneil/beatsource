import React, { Component } from 'react'
import { withRouter } from 'react-router';


class Header extends Component {
  render() {
    return (
      <div className='header'>
        <h1 className='logo' onClick={() =>{
          this.props.history.push('/');
        }}>Beatsource</h1>
        {
          this.props.currentUser
          ?
          <>
          <p className='username'>Hi, {this.props.currentUser.username}</p>
          <button className='logOutHeaderButton' onClick={this.props.handleLogout}>Logout</button>
          <button className='uploadHeaderButton' onClick={() => this.props.history.push('/upload')}>Upload</button>
          </>
          :
          
          <button className='loginHeaderButton' onClick={this.props.handleLoginButton}>Login / Register</button>
   
        }
        
      </div>
    )
  }
}

export default withRouter(Header);