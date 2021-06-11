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

const App = () => {
  // const [player, setPlayer] = useState(initialStorage)
  const [store, dispatch] = useReducer(
    playerReducer,
    initialStorage
  )
  const [hasName, setHasName] = useState(false)

  // onLoad
  useEffect(() => {
    if(store.name) setHasName(true)
    loadPlayer(dispatch)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div>
        {hasName ?
        <>
          <PlayerContainer />
          <CurrentFishBox dispatch={dispatch} store={store}/>
          <UpgradeStore store={store} dispatch={dispatch} />
          <PlayerInventory />
        </>:
        <FirstLoad store={store} dispatch={dispatch} setHasName={setHasName}/>
      }
    </div>
  );
}

export default App;
