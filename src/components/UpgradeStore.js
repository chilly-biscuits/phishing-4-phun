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
                <div className="item-card" key={index}>
                    <h4>{hat.name}</h4>
                    <p>price: ${hat.cost}</p>
                    <p>modifier: +{hat.modifier}</p>
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
                <div className="item-card" key={index}>
                    <h4>{rod.name}</h4>
                    <p>price: ${rod.cost}</p>
                    <p>modifier: +{rod.modifier}</p>
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
                <div className="item-card" key={index}>
                    <h4>{bait.name}</h4>
                    <p>price: ${bait.cost}</p>
                    <p>modifier: +{bait.modifier}</p>
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
            <h2>Your Money: ${store.money}</h2>
            {/* <button onClick={() => addMoney(dispatch)}>CHA-CHING</button> */}
            <h2>Total Modifier Bonus: +{store.playerModifier}</h2>

        <div className="shop-container">
            <div className="shop-hats">
                <h3>HATS</h3>
                <h4>Current Hat: {findName(hats, hatId)}</h4>
                <h4>Current Hat Mod :{findMod(hats, hatId)}</h4>
                {hats.map((hat, index) =>
                    shopRenderHats(hat, index)
                )}
            </div>

            <div className="shop-rods">
                <h3>RODS</h3>
                <h4>Current Rod: {findName(rods, rodId)}</h4>
                <h4>Current Rod Mod :{findMod(rods, rodId)}</h4>
                {rods.map((rod, index) =>
                    shopRenderRods(rod, index)
                )}
            </div>

            <div className="shop-bait">
                <h3>BAIT</h3>
                <h4>Current Bait: {findName(baits, baitId)}</h4>
                <h4>Current Bait Mod: {findMod(baits, baitId)}</h4>
                {baits.map((bait, index) =>
                    shopRenderBaits(bait, index)
                )}
            </div>
        </div>
        </div>
    )
}
export default UpgradeStore