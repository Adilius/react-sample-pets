import React from "react";

/*
    A single pet item
*/

const PetsItem = ({ pet, onRemove }) => (


    <div className="pet-item">
        <img src={pet.photo} alt={pet.name} />

        {pet.name ? (
            <h2>Name: {pet.name}</h2>
        ) : null}

        {pet.species ? (
            <p>Species: {pet.species}</p>
        ) : null}

        {pet.favFoods ? (
            <div>
                <p>Favorite foods:</p>
                    {pet.favFoods.map((food, index) => (
                        <p key={index}
                        dangerouslySetInnerHTML={{__html: food}}/>
                    ))}
                    
            </div>
        ) : null}

        {pet.birthYear ? (
            <p>Birth year: {pet.birthYear}</p>
        ) : null}

        <button onClick={() => onRemove(pet.name)}>Remove</button>

    </div>
);

export default PetsItem;