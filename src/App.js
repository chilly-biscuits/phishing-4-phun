import React, {useState, useEffect} from 'react';
import initialStorage from './data/initialStorage'

const App = () => {
  const [player, setPlayer] = useState(initialStorage)
  
  // onLoad
  useEffect(() => {
    loadPlayer()
  },[])
  
  // Create player and save to local storage if one doesnt exist || load player from local storage
  const loadPlayer = () => {
    if(!localStorage.getItem('player')){
      localStorage.setItem('player', JSON.stringify(initialStorage))
      setPlayer(initialStorage)
    } else {
      const currentPlayer = JSON.parse(localStorage.getItem('player'))
      setPlayer(currentPlayer)
    }
  }


  return (
    <div>
      <h1>Hello World</h1>
      <p>{player.money}</p>
    </div>
  );
}

export default App;
