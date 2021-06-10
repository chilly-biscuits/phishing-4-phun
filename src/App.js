import './App.css';
import CurrentFishBox from './components/CurrentFishBox';
import PlayerContainer from './components/PlayerContainer';
import PlayerInventory from './components/PlayerInventory';
import UpgradeStore from './components/UpgradeStore';

//components

function App() {
  return (
    <div className="App">
      <div>
        <PlayerContainer />
        <CurrentFishBox/>
        <UpgradeStore />
        <PlayerInventory />
      </div>
    </div>
  );
}

export default App;
