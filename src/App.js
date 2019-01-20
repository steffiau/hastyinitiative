import React, { Component } from 'react';
import './App.css';
import AddCharacter from './AddCharacter';
import Character from './Character';

class App extends Component {
  render() {
    const {store} = this.props;
    const state = store.getState();
    return (
      <div className="App">
        <AddCharacter store={store}/>
        {state.characters.map(id => <Character key={id} id={id} character={state.charactersById[id]} store={store} /> )}
      </div>
    );
  }
}

export default App;
