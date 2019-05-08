import React from 'react'



function Display (props) {
  

    return (
      // <div>
      //   <table id="tracks-table">
      //     <tr>
      //       <th>Artist</th>
      //       <th>Song Title</th>
      //       <th>Format</th>
      //     </tr>
      //     <tr>
      //       {props.songs.map(song => (
      //         <tr>
      //           <td>{song.artist}</td>
      //         </tr>
      //         ))}
      //     </tr>

      //     <tr>
      //       {props.songs.map(song => (
      //         <tr>
      //           <td>{song.title}</td>
      //         </tr>
      //         ))}
      //     </tr>
          
      //   </table>
      // </div>
      
      <div className='display--tracks'>
      <div className='display-track-row'>
        <div className='display-trackrow-artist'>Artist</div>
        <div className='display-trackrow-songTitle'>Song Title</div>
        <div className='display-trackrow-format'>Format</div>
      </div>
      
        {props.songs.map(song => (
            <div>
                <div className='tracks'>
              
                    <span className='display-artist'>{song.artist}</span>
                    <span className='display-songTitle'>{song.title}</span>
                    <span className='display-format'>{song.format}</span>
                  
                </div>
            </div>
        ))}
      </div>
    )
  
}

export default Display
