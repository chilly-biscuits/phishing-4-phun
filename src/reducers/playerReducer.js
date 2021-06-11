const playerReducer = (state, action) => {
  switch (action.type) {
    case 'setName':
      return{
        ...state,
        "name": action.data
      }

    case 'setMoney':
      return{
        ...state,
        "money": parseInt(state.money) + parseInt(action.data)
      }

    case 'spendMoney':
      return{
        ...state,
        "money": state.money - action.data
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

      case 'setMod':
        return{
          ...state,
          "playerModifier" : action.data
        }

    default: {
      return null
    }
  }
}

export default playerReducer
