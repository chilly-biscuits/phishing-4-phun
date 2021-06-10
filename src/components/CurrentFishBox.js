//This component contains the click to fish button, an image of the current fish and it's description
//While fishing in process a progress bar appears and the 'fish' button is disabled
import fish from "../data/fish";
import junk from "../data/junk";
import React, { useState } from "react";

const CurrentFishBox = () => {
  //this needs to be moved out but it can stay here for now until we fix it
  const decideResult = () => {
    const caughtCategory = Math.floor(Math.random() * 2) ?  "junk" : "fish"
    
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
        return fish.legendary[getFishVal(fish.legendary.length)];
      }
    }
  };

  const [caughtFish, setCaughtFish] = useState({});
  return (
    <>
      <h1>Fish box</h1>
      <button onClick={() => setCaughtFish(decideResult())}>
        Click to PHISH
      </button>
      <p>{caughtFish.description}</p>
    </>
  );
};

//On click of the fish button, if there is a currentFish delete it, then roll for a fish
//disable the click for 5 seconds
//First roll junk or fish?
//Then roll which junk, or which fish
//display fish image and fish description plus value
//add the fish value to user current money

export default CurrentFishBox;
