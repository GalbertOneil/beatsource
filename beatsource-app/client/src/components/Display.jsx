import React from 'react'



function Display (props) {
  
    


 
    return (
      <div className='diplay--tracks'>
        {props.songs.map(song => (
            <div className='Tracks'>
                <p>{song.artist}</p>
                <p>{song.title}</p>
                <p>{song.format}</p>
            </div>
        ))}
      </div>
    )
  
}

export default Display
