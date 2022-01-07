import React from "react";
import { useDispatch, useSelector } from "react-redux";

const PairingForm = () => {
   
    
   
    return (
    <form>
        <label htmlFor="game-choice">
            Choose Your Game!
            <input id="game-choice"/>
                <datalist>

                </datalist>
            
        </label>
        <label htmlFor="liquor-choice">
            Whatchya drinking?
            <input list="liquors" id="liquor-choice" />
            <datalist id="liquors" >
                <option value="Vodka" />
                <option value="Gin" />
                <option value="Rum" />
                <option value="Whiskey" />
                <option value="Bourbon" />
                <option value="Tequila" />
                <option value="Scotch" />
                <option value="Non Alcoholic" />
            </datalist>

        </label>

    </form>
    )
}

export default PairingForm