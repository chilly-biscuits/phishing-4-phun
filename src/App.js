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

// styles
import {LeftBar, MainSection, GameContainer} from './styles/style'

const App = () => {
  // const [player, setPlayer] = useState(initialStorage)
  const [store, dispatch] = useReducer(
    playerReducer,
    initialStorage
  )

  const [hasName, setHasName] = useState(true)


  // onLoad
  useEffect(() => {
    checkName()
    loadPlayer(dispatch)
  },[])
  
  const checkName = () => {
    if(store.name) setHasName(true)
  }

  return (
    <div>
        {! hasName ? <FirstLoad store={store} dispatch={dispatch} setHasName={setHasName}/> :
        <GameContainer>
          <LeftBar>
            <UpgradeStore />
            <PlayerInventory />
          </LeftBar>
          <MainSection>
            <PlayerContainer />
            <CurrentFishBox/>
          </MainSection>
        </GameContainer>
      }
    </div>
  );
}

export default App;
