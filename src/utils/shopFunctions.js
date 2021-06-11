    //UPDATE CURRENT ITEM
    
    export const handleHat = (event, dispatch) => {
        dispatch({
          type: 'setHat',
          data: event.target.value
        })
    }
    
    export const handleRod = (event, dispatch) => {
        dispatch({
          type: 'setRod',
          data: event.target.value
        })
    }

    export const handleBait = (event, dispatch) => {
        dispatch({
          type: 'setBait',
          data: event.target.value
        })
    }

    //Find value in data based on id value
    export const findName = (arr, input) => {
        return (
            arr.find(i => i.id === parseInt(input)).name
            )
        }
        
    export const findMod= (arr, input) => {
        return (
            arr.find(i => i.id === parseInt(input)).modifier
            )
    }
    
    // used by handleCost and correctFinances
    export const findCost= (arr, input) => {
        return (
            arr.find(i => i.id === parseInt(input)).cost
        )
    }

    //SPEND MONEY - uses find cost
    export const handleCost = (event, input, dispatch) => {
        dispatch({
            type: 'spendMoney',
            data: findCost(input, event.target.value)
        })
    }
         
    //CHECK FUNDS FOR DISABLED BUTTON - uses find cost
    export const correctFinances = (arr, input, store) => {
        return (
            store.money < findCost(arr, input)
        )
    }

    //TEMP ADD MONEY BUTTON
    export const addMoney = (dispatch) => {
        dispatch({
            type: 'setMoney',
            data: 1
        })
    }

