const playerReducer = (state, action) => {

  // // working concept for function to calculate new Playermodifier value
  // const calculateModifier = (oldItem, newItem) => {
  //   return (state.playerModifier - oldItem) + newItem
  // }
  
  switch (action.type) {
    case 'setName':
      return{
        ...state,
        "name": action.data
      }

    case 'setMoney':
      return{
        ...state,
        "money": state.money + action.data
      }

    case 'setHat':
      return{
        ...state,
        "inventory" : {  
          ...state.inventory,        
          "hatId": action.data
        }
      }

    case 'setBait':
      return{
        ...state,
        "inventory" : {
          ...state.inventory,
          "baitId": action.data
        }
      }
    
    case 'setRod':
      return{
        ...state,
        "inventory" : {
          ...state.inventory,
          "rodId": action.data
        }
      }

    default: {
      return null
    }
  }
}

export default playerReducer
