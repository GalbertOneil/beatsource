import React from 'react';
// import AudioPlayer from 'react-cl-audio-player';
import './App.css';
import musicFile from './NeverFarFromYou.mp3';
import Sound from 'react-sound'

function App() {
  // const songs = [
  //   {
  //     url: musicFile,
  //     cover: '',
  //     artist: {
  //       name: 'Ted Edwards',
  //       song: 'Never Far From You'
  //     }
  //   }
  // ];

  return (
    <div className="App">
      {/* <AudioPlayer
          songs={songs}
          autoplay
        /> */}
      <Sound
        playStatus="PLAYING"
        url="./NeverFarFromYou.mp3"
        autoPlay={true}/>  
    </div>
  );
}

export default App;
