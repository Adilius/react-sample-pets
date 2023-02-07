import React from "react";
import PetsItem from "./PetsItem";
import {useState} from "react";


/*
    Pet item container
*/


const Pets = () => {

    //Ladda in husdjursdata från JSON fil
    const petsData = require('../assets/pets-data.json')

    // Tillståndsvariabel med husdjur från husdjursdata
    const [petsCollection, setPetsCollection] = useState(petsData.pets);


    //Skicka in ett husdjursnamn och ta bort den från samlingen
    const removePet = (petName) => {
        setPetsCollection(petsCollection.filter((pet) => pet.name !== petName))
    }

    const refillPets = () => {
        setPetsCollection(petsData.pets)
    }

    return (
        <div>
            <button onClick={() => refillPets()}>Reset pets</button>
            {petsCollection.map((pet) => (
                <PetsItem key={pet.name} pet={pet} onRemove={removePet}/>
            ))}
        </div>
    )
}

export default Pets;