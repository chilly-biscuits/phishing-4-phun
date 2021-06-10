import React, {useEffect, useReducer, useState} from 'react';
import initialStorage   from './data/initialStorage'
// reducer-state
import playerReducer    from './reducers/playerReducer.js'
// components
import CurrentFishBox   from './components/CurrentFishBox';
import PlayerContainer  from './components/PlayerContainer';
import PlayerInventory  from './components/PlayerInventory';
import UpgradeStore     from './components/UpgradeStore';
import FirstLoad        from './components/FirstLoad'
// utilities
import loadPlayer       from './utils/loadPlayer' 
import savePlayer       from  './utils/savePlayer'

const App = () => {
  // const [player, setPlayer] = useState(initialStorage)
  const [store, dispatch] = useReducer(
    playerReducer,
    initialStorage
  )

  const [input, setInput] = useState('')


  // onLoad
  useEffect(() => {
    loadPlayer(dispatch)
  },[])
  

  const handleSubmit = (event) => {
    event.preventDefault()
    savePlayer(store)
  } 

  const handleChange = (event) => {
    dispatch({
      type: 'setName',
      data: event.target.value
    })
  }

  return (
    <div className="App">
        {store.name ?
        <>
          <PlayerContainer />
          <CurrentFishBox/>
          <UpgradeStore />
          <PlayerInventory />
        </>:
        <FirstLoad />
      }
      <h1>Name: {store.name}</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} ></input>
        <button type="submit" value={store.name}>Submit</button>
      </form>
    </div>
  );
}

export default App;
