import React, { Component } from 'react'
import './App.css';
import { Route, Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import Header from './components/Header'
import Footer from './components/Footer'
import Display from './components/Display'
import { showSong } from './serivces/api-helper'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        crates:[],
        songs:[],
    }
}

    componentDidMount(){
      this.getSongs()
    }

    async getSongs() {
        const songs = await showSong();
        this.setState({ songs })
      }

render(){
  return (
    <div className="App">
    <Header />
    <Display songs = {this.state.songs} />
    <Footer />
    
       
    </div>
  );
  }
}

export default App;
