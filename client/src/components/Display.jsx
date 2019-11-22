import React from 'react'
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import UpdateSongForm from './UpdateSongForm';


function Display(props) {

  

  return (

    <div className='display--tracks'>
      <div className='display-track-row'>
        <div className='display-trackrow-artist'>ARTIST</div>
        <div className='display-trackrow-songTitle'>SONG TITLE</div>
        <div className='display-trackrow-format'>FORMAT</div>
      </div>

      {props.songs.map(song => (
        <div className='tracks'>
          <span className='display-artist'>{song.artist}</span>
          <span className='display-songTitle'>{song.title}</span>
          <span className='display-format'>{song.format}</span>
         <button onClick={() => {
            props.setSongForm(song)
            props.history.push("/update")
         }} className='playButton' >EDIT</button>

          <button className='deleteButton' onClick={() => props.deleteSong(song.id)}>DELETE</button>
        </div>
      ))}
    </div>
  )

}

export default withRouter(Display)
