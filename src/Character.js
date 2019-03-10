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
        <li className="character">
            <span className="character-name">
                {character.name} (init: {character.initiative ? character.initiative : ' initiative not set'})
            </span>
            <div className="input-button-combo">
                <input className="character-initiative-input" ref={node => { input = node }}></input>
                <button className="button" onClick={handleOnClick}>Add Initiative</button>
            </div>
        </li>
    )
};

export default Character;