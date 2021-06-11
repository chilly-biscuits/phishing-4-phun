import React, {useEffect, useReducer, useState} from 'react';
import initialStorage   from './data/initialStorage'; 
import Modal            from 'react-modal';
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
import savePlayer       from './utils/savePlayer' 

const App = () => {
  // const [player, setPlayer] = useState(initialStorage)
  const [store, dispatch] = useReducer(
    playerReducer,
    initialStorage
  )
  const [hasName, setHasName] = useState(false)
  const [modalIsOpen,setIsOpen] = React.useState(false);
  
  useEffect(() => {
    if(localStorage.getItem('player')){
      if(JSON.parse(localStorage.getItem('player')).name) setHasName(true)
    }
    loadPlayer(dispatch)
  }, [])

  useEffect(() => {
    savePlayer(store)
  }, [store.money])

  Modal.setAppElement('#root');

  const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      width : '80vw',
      height: '80vh'
    }
  };

  const closeModal = () => {
    setIsOpen(false);
    savePlayer(store)
  }

  const openModal = () => {
    setIsOpen(true);
  }


  return (
    <div>
        {hasName ?
        <div className="App">
          {/* <PlayerContainer /> */}
          <CurrentFishBox dispatch={dispatch} store={store}/>

          <button className="shop-button" onClick={openModal}>Shop</button>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Shop"
          >
            <UpgradeStore store={store} dispatch={dispatch} />
          </Modal>
          {/* <PlayerInventory /> */}
        </div>:
        <FirstLoad store={store} dispatch={dispatch} setHasName={setHasName}/>
      }
    </div>
  );
}

export default App;
