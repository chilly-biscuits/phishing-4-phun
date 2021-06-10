//This is where the upgrade store is, updates the user's money and inventory when an upgrade is purchased

// const handleHat = (event) => {
//     dispatch({
//       type: 'setHat',
//       data: event.target.value
//     })
//   }

//   const printHat = (input) => {
//     return (
//       hats.find(i => i.id === parseInt(input)).name
//     )
//   }

//   const printHatMod= (input) => {
//     return (
//       hats.find(i => i.id === parseInt(input)).modifier
//     )
//   }

const UpgradeStore = () => {
    return(
        <>
        <h1>Shop</h1>
        {/* <h1>Name: {store.name}</h1>
            <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} ></input>
            <button type="submit" value={store.name}>Submit</button>
            <button onClick={handleHat} value={4}>Buy pirate hat</button>
            <button onClick={handleHat} value={1}>Buy bucket hat</button>
            <p>Hat: {printHat(store.inventory.hatId)}</p>
            <p>Hat Mod: {printHatMod(store.inventory.hatId)}</p>
      </form> */}
        </>
    )
}
export default UpgradeStore