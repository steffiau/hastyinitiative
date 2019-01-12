import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const initialState = {
    charactersById: {},
    characters: []
}

function initiativeApp(state = initialState, action) {
    switch (action.type) {
        case "ADD_CHARACTER":
        return {
            charactersById: {
            ...state.charactersById,
            [action.id]: {name: action.name,}
            },
            characters: [...state.characters, action.id]
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
