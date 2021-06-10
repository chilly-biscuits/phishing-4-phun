import React, {useEffect, useReducer} from 'react';
import initialStorage from './data/initialStorage'
import playerReducer from './reducers/playerReducer.js'

const App = () => {
  // const [player, setPlayer] = useState(initialStorage)
  const [store, dispatch] = useReducer(
    playerReducer,
    initialStorage
  )


  // onLoad
  useEffect(() => {
    loadPlayer()
  },[])
  
  // Create player and save to local storage if one doesnt exist || load player from local storage
  const loadPlayer = () => {
  if(!localStorage.getItem('player')){
    localStorage.setItem('player', JSON.stringify(initialStorage))
  } else {
    const currentPlayer = JSON.parse(localStorage.getItem('player'))
    dispatch({type: 'setName', data: currentPlayer.name})
    dispatch({type: 'setMoney', data: currentPlayer.money})
    dispatch({type: 'setHat', data: currentPlayer.inventory.hatId})
    dispatch({type: 'setBait', data: currentPlayer.inventory.baitId})
    dispatch({type: 'setRod', data: currentPlayer.inventory.rodId})
  }
  }

  const handleClick = () => {
    dispatch(
      {
        type: 'setMoney',
        data: 1
      }
    )
  }

  return (
    <div>
      <h1>Hello World</h1>
      <p>Current Money : ${store.money}</p>
      <button onClick={handleClick}>Add One</button>
    </div>
  );
}

export default App;
