import React from 'react';
let nextCharacterId = 0;

const AddCharacter = (props) => {
    let input;
    return (
        <div>
            <input ref={node => { input = node }} ></input>
            <button onClick={()=> {
                props.store.dispatch({
                    type: "ADD_CHARACTER",
                    name: input.value,
                    id: nextCharacterId++
                })
                input.value = '';
            }}>
                Add Character
            </button>
        </div>
    );
};

export default AddCharacter;