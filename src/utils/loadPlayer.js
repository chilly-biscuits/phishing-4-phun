import initialStorage   from '../data/initialStorage'


// Create player and save to local storage if one doesnt exist || load player from local storage
const loadPlayer = (dispatch) => {
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

export default loadPlayer