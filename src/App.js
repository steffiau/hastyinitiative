import React, { Component } from 'react';
import d20Icon from './d20-icon.jpg';
import './css/App.css';
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
        <header className="header">
          <div className="title-container">
            <h1 className="title">Hasty Initiative</h1>
            <img className="title-icon" src={d20Icon} alt="d20 icon"></img>
          </div>
        </header>
        <div className="characters-container">
          <AddCharacter className="add-character" store={this.props.store}/>
          <CharacterList className="characters" characters={state.charactersIdArray.map(id => state.charactersById[id])} addInitiative={this.addInitiative}/>
        </div>
      </div>
    );
  }
}

export default App;
