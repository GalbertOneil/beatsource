import React from 'react';

const UploadSongForm = (props) => {

  return (
    <div className='UploadSong'>
      <h2 className='UploadTitle'>Upload Track</h2>
      
      <form className='UploadForm' onSubmit={props.uploadSong} >
        <input name="artist" type="text" placeholder="artist" onChange={props.handleChange}/>
        <input name="title" type="title" placeholder="title" onChange={props.handleChange}/>
        <input name="format" type="format" placeholder="format" onChange={props.handleChange}/>
        <button className='uploadSongButton'>UPLOAD</button>
      </form>
    </div>
  );
}

export default UploadSongForm;