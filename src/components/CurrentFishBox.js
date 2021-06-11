//This component contains the click to fish button, an image of the current fish and it's description
//While fishing in process a progress bar appears and the 'fish' button is disabled
import fish from "../data/fish";
import junk from "../data/junk";
import React, { useState, useEffect } from "react";

const CurrentFishBox = ({dispatch, store}) => {
  //this needs to be moved out but it can stay here for now until we fix it
  const decideResult = () => {
    const caughtCategory = Math.floor(Math.random() * 3) ?  "fish" : "junk"
    
    //if it rolled junk pick a random junk item
    if (caughtCategory === "junk") {
      return junk[Math.floor(Math.random() * junk.length)];
    }
    //if it rolled fish, get a random number from 0-1000 to pick fish rarity
    if (caughtCategory === "fish") {
      const secondRoll = Math.floor(Math.random() * 1001)
      const getFishVal = (length) => Math.floor(Math.random() * length)

      if (secondRoll < 500) { return fish.common[getFishVal(fish.common.length)];
      } else if (secondRoll > 500 && secondRoll < 750) {
        return fish.uncommon[getFishVal(fish.uncommon.length)];
      } else if (secondRoll > 750 && secondRoll < 900) {
        return fish.rare[getFishVal(fish.rare.length)];
      } else if (secondRoll > 900 && secondRoll < 999) {
        return fish.exotic[getFishVal(fish.exotic.length)];
      } else if (secondRoll === 1000) {
        return fish.legendary[0];
      }
    }
  };

  const [caughtFish, setCaughtFish] = useState(junk[0]);
  const [counter, setCounter] = useState(0);
  
  const addVal = () => {
    dispatch({
      type: 'setMoney',
      data: caughtFish['value']
    })
  }

  const handleClick = () =>{
    setCaughtFish(decideResult())
    startCounter()
  }

  useEffect(() => {
    addVal()
  }, [caughtFish])

  useEffect( () => {
    if(counter) setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);
  
  const startCounter = () => setCounter(5);
    
  const colorForRarity = () => {
    const fish = caughtFish 
    if(fish.rarity === "common"){ return "#60A5FA"}
    if(fish.rarity === "uncommon"){ return "#34d390"}
    if(fish.rarity === "rare"){ return "#8B5CF6"}
    if(fish.rarity === "exotic"){ return "#fbbf24"}
    if(fish.rarity === "legendary"){ return "#f472b6"}
    if(fish.rarity === "junk"){return "#d1d5db"}
  }

  return (
    <div className="fish-box">
      <button disabled={counter} onClick={() => handleClick()}>
        {counter ? counter : "Click to PHISH 🎣"}
      </button>
      <h3 style={{backgroundColor: `${colorForRarity()}`, padding: "2px 8px", borderRadius: "10px"}} >{"You caught a " + caughtFish.name + " (" + caughtFish.rarity + ")"}</h3>
      <h4 style={{fontStyle : "italic", color: "#444"}}>"{caughtFish.description}"</h4>
      <h3>{store.name}'s Money: <span style={{padding: "2px 8px", backgroundColor: "#333", color: "orange", borderRadius:"5px"}}>${store.money}</span></h3>
      
            
    </div>
  );
};

//On click of the fish button, if there is a currentFish delete it, then roll for a fish
//disable the click for 5 seconds
//First roll junk or fish?
//Then roll which junk, or which fish
//display fish image and fish description plus value
//add the fish value to user current money

export default CurrentFishBox;
