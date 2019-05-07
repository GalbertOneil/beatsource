import React from 'react'



function Display (props) {
  
   
    return (
      <div className='display--tracks'>
        {props.songs.map(song => (
            <div>
                <div className='tracks'>
                    <span>{song.artist}</span>
                    <span>{song.title}</span>
                    <span>{song.format}</span>
                </div>
            </div>
        ))}
      </div>
    )
  
}

export default Display
