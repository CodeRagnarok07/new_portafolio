import './App.css';

function App() {

  return (

    <div className="center" >




      <iframe
        className='video'
        src="https://www.youtube.com/embed/ErDW1ZzeBQQ?controls=0?autoplay=0" 
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen />

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
