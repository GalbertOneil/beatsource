import React, { Component } from 'react'
import './App.css';
import { Route, Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import decode from 'jwt-decode';
import Login from './components/Login'
import Register from './components/Register'
import Header from './components/Header'
import Footer from './components/Footer'
import Display from './components/Display'
import Carousel from './components/Carousel';
import {
  loginUser,
  registerUser,
  showSong
  } from './services/api-helper';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        crates:[],
        songs:[],
        currentUser: null, 
        authFormData: {        
        username: "",
        password:''
    }
  }
  this.handleLoginButton = this.handleLoginButton.bind(this);
  this.authHandleChange = this.authHandleChange.bind(this);
  this.handleRegister = this.handleRegister.bind(this);
  this.handleLogin = this.handleLogin.bind(this);
  this.handleLogout = this.handleLogout.bind(this);

}

handleLoginButton() {
  this.props.history.push("/login")
}


componentDidMount() {
  this.getSongs()
  const checkUser = localStorage.getItem("jwt");
  if (checkUser) {
    const user = decode(checkUser);
    this.setState({
      currentUser: user
    })
  }
}

async handleLogin() {
  const token = await loginUser(this.state.authFormData);
  const userData = decode(token.jwt)
  this.setState({
    currentUser: userData
  })
  localStorage.setItem("jwt", token.jwt)
  this.props.history.push('/')
}

async handleRegister(e) {
  e.preventDefault();
  await registerUser(this.state.authFormData);
  this.handleLogin();
}

handleLogout() {
  localStorage.removeItem("jwt");
  this.setState({
    currentUser: null
  })
}

authHandleChange(e) {
  const { name, value } = e.target;
  this.setState(prevState => ({
    authFormData: {
      ...prevState.authFormData,
      [name]: value
    }
  }));
}

handleChange(e) {
  const { name, value } = e.target;
  this.setState({ formData: { [name]: value } });
}

async getSongs() {
    const songs = await showSong();
    
    
    this.setState({
      songs
    })
}


play(){
  console.log('play')
}

render(){
  return (
    <div className="App">
    <Header handleLoginButton={this.handleLoginButton} currentUser={this.state.currentUser} handleLogout={this.handleLogout}/>
    <Route exact path="/login" render={(props) => (
          <Login
            handleLogin={this.handleLogin}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData} />)} />
        <Route exact path="/register" render={(props) => (
          <Register
            handleRegister={this.handleRegister}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData} />)} />
    <Route exact path='/' render={() => (
      <>
        <Carousel />
        <Display songs = {this.state.songs} play={this.play} />
      </>
    )} />
    
    <Footer />
    
       
    </div>
  );
  }
}

export default withRouter(App);
