import React from 'react';

const Character = (props) => {
    const {character, id} = props;
    return (
        <div>{character.name} (id: {id})</div>
    )
}

export default Character;