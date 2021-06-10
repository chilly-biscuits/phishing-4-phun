// This is where the upgrade store is, updates the user's money and inventory when an upgrade is purchased
import React, {useReducer} from 'react';

import initialStorage   from '../data/initialStorage'

import playerReducer    from '../reducers/playerReducer.js'

import { hats } from '../data/hats'
import { rods } from '../data/rods'
import { baits } from '../data/baits'



const UpgradeStore = () => {
    // const [player, setPlayer] = useState(initialStorage)
    const [store, dispatch] = useReducer(
        playerReducer,
        initialStorage
    )

    const handleHat = (event) => {
        dispatch({
          type: 'setHat',
          data: event.target.value
        })
    }
    
    const handleRod = (event) => {
        dispatch({
          type: 'setRod',
          data: event.target.value
        })
    }

    const handleBait = (event) => {
        dispatch({
          type: 'setBait',
          data: event.target.value
        })
    }

    const handleCost = (event, input) => {
        dispatch({
            type: 'spendMoney',
            data: findCost(input, event.target.value)
        })
    }

    const findName = (arr, input) => {
      return (
        arr.find(i => i.id === parseInt(input)).name
      )
    }
    
    const findMod= (arr, input) => {
      return (
        arr.find(i => i.id === parseInt(input)).modifier
      )
    }

    const findCost= (arr, input) => {
        return (
          arr.find(i => i.id === parseInt(input)).cost
        )
    }

    const correctFinances = (arr, input) => {
        return (
            store.money < findCost(arr, input)
        )
    }

    const addMoney = () => {
        dispatch({
            type: 'setMoney',
            data: 1
        })
    }

    const {hatId, rodId, baitId} = store.inventory

    return(
        <div className="shop">
        <h1>Shop</h1>
            <h1>Money: {store.money}</h1>
            <button onClick={addMoney}>CHA-CHING</button>

        <div className="shop-container">
            <div className="shop-hats">
                <h4>Hats</h4>
                {hats.map((hat, index) => 
                    <div key={index}>
                        <p>HAT: {hat.name}</p>
                        <p>COST: ${hat.cost}</p>
                        <button onClick={(event) => {handleHat(event); handleCost(event, hats);}} value={hat.id} disabled={correctFinances(hats, hat.id)}>Click me to buy a {hat.name}</button>
                    </div>
                )}
                <p>Current Hat: {findName(hats, hatId)}</p>
                <p>Current Hat Mod :{findMod(hats, hatId)}</p>
            </div>

            <div className="shop-rods">
                <h4>Rods</h4>
                {rods.map((rod, index) => 
                    <div key={index}>
                        <p>ROD: {rod.name}</p>
                        <p>COST: ${rod.cost}</p>
                        <button onClick={(event) => {handleRod(event); handleCost(event, rods);}} value={rod.id} disabled={correctFinances(rods, rod.id)}>Click me to buy a {rod.name}</button>
                    </div>
                )}
                <p>Current Rod: {findName(rods, rodId)}</p>
                <p>Current Rod Mod :{findMod(rods, rodId)}</p>
            </div>

            <div className="shop-bait">
                <h4>Bait</h4>
                {baits.map((bait, index) => 
                    <div key={index}>
                        <p>BAIT: {bait.name}</p>
                        <p>COST: ${bait.cost}</p>
                        <button onClick={(event) => {handleBait(event); handleCost(event, baits);}} value={bait.id} disabled={correctFinances(baits, bait.id)}>Click me to buy a {bait.name}</button>
                    </div>
                )}
                <p>Current Bait: {findName(baits, baitId)}</p>
                <p>Current Bait Mod: {findMod(baits, baitId)}</p>
            </div>


        </div>

        </div>
    )
}
export default UpgradeStore