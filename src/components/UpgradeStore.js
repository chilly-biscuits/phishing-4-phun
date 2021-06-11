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
        [hatId, rodId, baitId, dispatch]
    )
    
    const shopRenderHats = (hat, index) => {
        if (hat.id !== parseInt(hatId)) {
            return (
                <div key={index}>
                    <p>HAT: {hat.name}</p>
                    <p>COST: ${hat.cost}</p>
                    <p>MOD: {hat.modifier}</p>
                    <button onClick={(event) => {
                        handleHat(event, dispatch); 
                        handleCost(event, hats, dispatch); 
                    }}
                        value={hat.id} disabled={correctFinances(hats, hat.id, store)}>Click me to buy a {hat.name}</button>
                </div>
            )
        }
    }

    const shopRenderRods = (rod, index) => {
        if (rod.id !== parseInt(rodId)) {
            return (
                <div key={index}>
                    <p>ROD: {rod.name}</p>
                    <p>COST: ${rod.cost}</p>
                    <p>MOD: {rod.modifier}</p>
                    <button onClick={(event) => {
                        handleRod(event, dispatch); 
                        handleCost(event, rods, dispatch); 
                    }}
                        value={rod.id} disabled={correctFinances(rods, rod.id, store)}>Click me to buy a {rod.name}</button>
                </div>
            )
        }
    }

    const shopRenderBaits = (bait, index) => {
        if (bait.id !== parseInt(baitId)) {
            return (
                <div key={index}>
                    <p>BAIT: {bait.name}</p>
                    <p>COST: ${bait.cost}</p>
                    <p>MOD: {bait.modifier}</p>
                    <button onClick={(event) => {
                        handleBait(event, dispatch); 
                        handleCost(event, baits, dispatch); 
                    }}
                        value={bait.id} disabled={correctFinances(baits, bait.id, store)}>Click me to buy a {bait.name}</button>
                </div>
            )
        }
    }

    return(
        <div className="shop">
        <h1>Shop</h1>
            <h1>Money: {store.money}</h1>
            <button onClick={() => addMoney(dispatch)}>CHA-CHING</button>

            <h1>TOTAL PLAYER MOD: {store.playerModifier}</h1>

        <div className="shop-container">
            <div className="shop-hats">
                <h4>Hats</h4>
                <h5>Current Hat: {findName(hats, hatId)}</h5>
                <h5>Current Hat Mod :{findMod(hats, hatId)}</h5>
                {hats.map((hat, index) =>
                    shopRenderHats(hat, index)
                )}
            </div>

            <div className="shop-rods">
                <h4>Rods</h4>
                <h5>Current Rod: {findName(rods, rodId)}</h5>
                <h5>Current Rod Mod :{findMod(rods, rodId)}</h5>
                {rods.map((rod, index) =>
                    shopRenderRods(rod, index)
                )}
            </div>

            <div className="shop-bait">
                <h4>Bait</h4>
                <h5>Current Bait: {findName(baits, baitId)}</h5>
                <h5>Current Bait Mod: {findMod(baits, baitId)}</h5>
                {baits.map((bait, index) =>
                    shopRenderBaits(bait, index)
                )}
            </div>
        </div>
        </div>
    )
}
export default UpgradeStore