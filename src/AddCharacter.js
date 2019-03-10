import React from 'react';
let nextCharacterId = 0;

const AddCharacter = (props) => {
    let input;
    return (
        <div className="add-character-wrapper input-button-combo">
            <input ref={node => { input = node }} ></input>
            {/* TODO: have option to add initiative while creating character? */}
            <button className="button" onClick={()=> {
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