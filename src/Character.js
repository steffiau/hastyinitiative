import React from 'react';

const Character = ({
    addInitiative,
    character,
    id
}) => {
    let input;
    const handleOnClick = () => {
        addInitiative(input, id);
        input.value = '';
    }

    return (
        <li>
            {character.name} (id: {id}, initiative: {character.initiative ? character.initiative : 'not set'})
            <span>
                <input ref={node => { input = node }}></input>
                <button onClick={handleOnClick}>Add Initiative</button>
            </span>
        </li>
    )
};

export default Character;