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
import UploadSongForm from './components/UploadSongForm';
import UpdateSongForm from './components/UpdateSongForm'
import {
  loginUser,
  registerUser,
  showSong,
  addSong,
  destroySong,
  updateSong
} from './services/api-helper';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      crates: [],
      songs: [],
      currentUser: null,
      authFormData: {
        username: '',
        password: ''
      },
      uploadForm: {
        artist: '',
        title: '',
        format: ''
      },
      formData: {
        id: '',
        artist: '',
        title: '',
        format:''
      },
      isEdit:false
    }
    this.handleLoginButton = this.handleLoginButton.bind(this);
    this.authHandleChange = this.authHandleChange.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.uploadHandleChange = this.uploadHandleChange.bind(this);
    this.uploadSong = this.uploadSong.bind(this);
    this.deleteSong = this.deleteSong.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.editSong = this.editSong.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.setSongForm = this.setSongForm.bind(this)
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

  uploadHandleChange(e) {
    const { name, value } = e.target;
    this.setState(prevState => ({
      uploadForm: {
        ...prevState.uploadForm,
        [name]: value
      }
    }));
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value
      }
    }));
  }



  async getSongs() {
    const songs = await showSong();
    this.setState({
      songs
    })
  }

  async uploadSong(e) {
    e.preventDefault()
    const newSong = await addSong(this.state.uploadForm)
    this.setState(prevState => ({
      songs: [...prevState.songs, newSong],
      UploadForm: {
            artist: '',
            title: '',
            format: ''
          }
    }))
    this.props.history.push('/');
    this.getSongs();
  }


async deleteSong (songItem) {
  await destroySong(songItem);
  this.getSongs();
}

async editSong () {
  let data = {
      id: this.state.formData.id,
      artist: this.state.formData.artist,
      title: this.state.formData.title,
      format: this.state.formData.format,
  }
  await updateSong(data);
  this.setState({isEdit: false})
  this.getSongs();
  this.props.history.push("/")
}

setSongForm (songItem) {
  this.setState({formData: {
    id: songItem.id,
    artist: songItem.artist,
    title: songItem.title,
    format: songItem.artist
  } })
}

toggleEdit(){
  this.setState({isEdit: true})
}

  render() {
   
    return (
      <div className="App">
        <Header 
        handleLoginButton={this.handleLoginButton} 
        currentUser={this.state.currentUser} 
        handleLogout={this.handleLogout}
        />

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

        <Route exact path="/upload" render={(props) => (
          <UploadSongForm 
          handleChange={this.uploadHandleChange} 
          uploadSong={this.uploadSong} />
        )} />

         <Route exact path="/update" render={(props) => (
           <UpdateSongForm 
           handleChange={this.handleChange} 
           editSong={this.editSong}
           formData={this.state.formData} />
         )} />

       
        <Route exact path='/' render={() => (
          <>
            <Carousel />
            <Display 
            songs={this.state.songs}
            deleteSong={this.deleteSong}
            toggleEdit={this.toggleEdit} 
            isEdit={this.state.isEdit}
            handleChange={this.handleChange} 
            editSong={this.editSong}
            formData={this.state.formData}
            setSongForm={this.setSongForm} />
          </>
        )} />

        <Footer />


      </div>
    );
  }
}

export default withRouter(App);
