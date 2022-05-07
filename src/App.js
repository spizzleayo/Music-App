import React, {useState, useRef} from "react";
//import styles
import './styles/app.scss'
//addin components
import Player from './components/Player';
import Song from './components/Song';
import Library from "./components/Library";
//import util
import data from './util';

function App() {
  //Ref
  const audioRef = useRef(null);
  //state
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
});
const timeUpdateHandler = (e) => {
  const current = e.target.currentTime;
  const duration = e.target.duration;
  setSongInfo({...songInfo, currentTime: current, duration})
};
  return (
    <div className="App">
        <Song currentSong={currentSong} />
        <Player
        audioRef={audioRef}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying} 
        currentSong={currentSong}
        setSonginfo={setSongInfo}
        songInfo={songInfo} />
        <Library 
        audioRef={audioRef} 
        songs={songs} 
        setCurrentSong={setCurrentSong} 
        isPlaying={isPlaying} />
        <audio 
          onTimeUpdate={timeUpdateHandler} 
          onLoadedMetadata={timeUpdateHandler}
          ref={audioRef} 
          src={currentSong.audio}>

          </audio>
    </div>
  );
}

export default App;
