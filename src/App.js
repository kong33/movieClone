// App.js
import React from 'react';
import Movie from '../src/Components/Movie'; // Movie 컴포넌트를 import합니다.
import {movies} from '../src/movieDummy';
const App = () => {
  const firstBanner = [];
  const secondBanner = [];

  for ( let i=0; i<8; i++ ) {
    const selectedMovie = movies.results[i];  
    firstBanner.push(<Movie data={selectedMovie}/>)
  }

  for ( let i=8; i<16; i++ ) {
    const selectedMovie = movies.results[i];  
    secondBanner.push(<Movie data={selectedMovie}/>)
  }

  return( <div>
  <div className="firstBanner" style={{display: 'flex', justifyContent: 'space-around', margin: '5vh'}}>
    {firstBanner}
  </div>

  <div className="secondBanner" style={{display:'flex', justifyContent: 'space-around', margin: '5vh'}}>
    {secondBanner}
  </div>

 </div>
)




};

export default App;
