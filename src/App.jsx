import { useEffect, useRef } from 'react';
import './App.css';

function App() {


  const vidRef = useRef();

  const play = () => {
    vidRef.current.play();

  }

  useEffect(() => {


    play()
  }, [vidRef]);
  return (

    <div className="center" >

      <video onMouseEnter={(e) => e.target.play()} className='video' ref={vidRef} width={"100%"} loop src="video.mp4"></video>

      <div className='container'>


        <h1 className='title-portfolio'>The Best Portfolio :D</h1>
        <div className="doge">
          <img src="img/doge.jpg" className="doge-logo" alt="logo" />
        </div>

      </div>

    </div>
  );
}

export default App;
