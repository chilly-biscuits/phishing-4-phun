import savePlayer from "../utils/savePlayer"

//this will run the first time a user opens the app to set the player name
const FirstLoad = ({setHasName, store, dispatch}) => {

  const handleSubmit = (event) => {
    event.preventDefault()
    savePlayer(store)
    if(store.name) setHasName(true)
  } 

  const handleChange = (event) => {
    dispatch({
      type: 'setName',
      data: event.target.value
    })
  }

  return(
    <>
      <h1>Welcome to Phishing for Phun</h1>
      <p>Please set your Phisher name:</p>

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} ></input>
        <button type="submit" value={store.name}>Submit</button>
      </form>
        
    </>
  )
}

export default FirstLoad