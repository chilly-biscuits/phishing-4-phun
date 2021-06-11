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

const App = () => {
  // const [player, setPlayer] = useState(initialStorage)
  const [store, dispatch] = useReducer(
    playerReducer,
    initialStorage
  )
  const [hasName, setHasName] = useState(false)
  const [modalIsOpen,setIsOpen] = React.useState(false);

  // onLoad
  useEffect(() => {
    if(store.name) setHasName(true)
    loadPlayer(dispatch)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

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
  }

  const openModal = () => {
    setIsOpen(true);
  }


  return (
    <div>
        {hasName ?
        <>
          <PlayerContainer />
          <CurrentFishBox dispatch={dispatch} store={store}/>
          <button onClick={openModal}>Shop</button>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Shop"
          >
            <UpgradeStore store={store} dispatch={dispatch} />
          </Modal>

          <PlayerInventory />
        </>:
        <FirstLoad store={store} dispatch={dispatch} setHasName={setHasName}/>
      }
    </div>
  );
}

export default App;
