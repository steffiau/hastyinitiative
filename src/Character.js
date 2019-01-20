import React from 'react';

const Character = (props) => {
    const {character, id} = props;
    let input;
    return (
        <div>
            {character.name} (id: {id}, initiative: {character.initiative ? character.initiative : 'not set'})
            <span>
                <input ref={node => { input = node }}></input>
                <button onClick={() => {
                    props.store.dispatch({
                        type: 'ADD_INITIATIVE',
                        initiative: Number(input.value),
                        id
                    });
                    input.value = '';
                }}>Add Initiative</button>
            </span>
        </div>
    )
}

export default Character;