const savePlayer = (store) => {
  localStorage.setItem('player', JSON.stringify(store))
}

export default savePlayer