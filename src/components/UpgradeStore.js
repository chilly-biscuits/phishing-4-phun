// This is where the upgrade store is, updates the user's money and inventory when an upgrade is purchased
import React, { useEffect } from 'react';

import { 
    handleHat,
    handleRod,
    handleBait,
    findName,
    findMod,
    handleCost,
    correctFinances,
    addMoney,
    handleTotalPlayerModifier
 } from '../utils/shopFunctions'

import { hats } from '../data/hats'
import { rods } from '../data/rods'
import { baits } from '../data/baits'

const UpgradeStore = ({store, dispatch}) => {
    // const [player, setPlayer] = useState(initialStorage)

    const {hatId, rodId, baitId} = store.inventory

    useEffect(
        () => {
            handleTotalPlayerModifier(hatId, hats, rodId, rods, baitId, baits, dispatch);
        },
        [hatId, rodId, baitId]
    )
    

    return(
        <div className="shop">
        <h1>Shop</h1>
            <h1>Money: {store.money}</h1>
            <button onClick={() => addMoney(dispatch)}>CHA-CHING</button>

            <h1>TOTAL PLAYER MOD: {store.playerModifier}</h1>

        <div className="shop-container">
            <div className="shop-hats">
                <h4>Hats</h4>
                {hats.map((hat, index) => 
                    <div key={index}>
                        <p>HAT: {hat.name}</p>
                        <p>COST: ${hat.cost}</p>
                        <button onClick={(event) => {
                            handleHat(event, dispatch); 
                            handleCost(event, hats, dispatch); 
                        }}
                            value={hat.id} disabled={correctFinances(hats, hat.id, store)}>Click me to buy a {hat.name}</button>
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
                        <button onClick={(event) => {
                            handleRod(event, dispatch); 
                            handleCost(event, rods, dispatch); 
                        }} 
                            value={rod.id} disabled={correctFinances(rods, rod.id, store)}>Click me to buy a {rod.name}</button>
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
                        <button onClick={(event) => {
                            handleBait(event, dispatch); 
                            handleCost(event, baits, dispatch); 
                        }} 
                            value={bait.id} disabled={correctFinances(baits, bait.id, store)}>Click me to buy a {bait.name}</button>
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