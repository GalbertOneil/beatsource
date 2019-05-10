import React from 'react';

const UpdateSongForm = (props) => {

  return (
    <div className='UploadSong'>
      <h2 className='UploadTitle'>Update Track</h2>
      
      <form className='UploadForm' onSubmit={(e) => {
          e.preventDefault()
          props.editSong()
      }} >
        
        <input name="artist" type="text" placeholder="artist" onChange={props.handleChange} value={props.formData.artist}/>
        <input name="title" type="title" placeholder="title" onChange={props.handleChange}value={props.formData.title}/>
        <input name="format" type="format" placeholder="format" onChange={props.handleChange}value={props.formData.format}/>
        <button className='uploadSongButton'>Update</button>
      </form>
    </div>
  );
}

export default UpdateSongForm;