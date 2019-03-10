import React, { Component } from 'react';
import './App.css';
import AddCharacter from './AddCharacter';
import { CharacterList } from './CharacterList';

class App extends Component {
  addInitiative = (input, id) => {
    this.props.store.dispatch({
        type: 'ADD_INITIATIVE',
        initiative: Number(input.value),
        id: id
    });
  }

  render() {
    const state = this.props.store.getState();
    return (
      <div className="App">
        <AddCharacter store={this.props.store}/>
        <CharacterList characters={state.charactersIdArray.map(id => state.charactersById[id])} addInitiative={this.addInitiative}/>
      </div>
    );
  }
}

export default App;
