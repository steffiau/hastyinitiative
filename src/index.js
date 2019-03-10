import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/**
 * TODO:
 * Order by initiative
 * Marker indicate who's turn
 * Trigger to move marker to next turn
 * Keyboard shortcuts (enter, N for next turn, B for back to previous turn)
 *
 */

const initialState = {
    charactersById: {},
    charactersIdArray: []
}

function initiativeApp(state = initialState, action) {
    switch (action.type) {
        case "ADD_CHARACTER":
            return {
                charactersById: {
                ...state.charactersById,
                [action.id]: {name: action.name, id: action.id}
                },
                charactersIdArray: [...state.charactersIdArray, action.id]
            }
        case "ADD_INITIATIVE":
            return {
                charactersById: {
                    ...state.charactersById,
                    [action.id]: {
                        ...state.charactersById[action.id],
                        initiative: action.initiative
                    }
                },
                charactersIdArray: [...state.charactersIdArray]
            }
        default:
            return state
    }
}

const store = createStore(initiativeApp);

const render = () => {
    ReactDOM.render(<App store={store}/>, document.getElementById('root'));
    console.log(store.getState())
}

store.subscribe(render);
render();



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
