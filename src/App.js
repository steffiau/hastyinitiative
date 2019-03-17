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

  getCharacters = (charactersIdArray, charactersById) =>
    charactersIdArray.map(id => charactersById[id]);

  compareInitiative = ({initiative: firstCharInitiative}, {initiative: secondCharInitiative}) => {
    if (!firstCharInitiative && !secondCharInitiative) { return 0 }
    if (!firstCharInitiative && secondCharInitiative) { return 1 }
    if (firstCharInitiative && !secondCharInitiative) { return -1 }
    return (secondCharInitiative - firstCharInitiative)
  }

  charactersByInitiative = (charactersIdArray, charactersById) =>
    this.getCharacters(charactersIdArray, charactersById).sort(this.compareInitiative);

  render() {
    const state = this.props.store.getState();
    const characters = this.charactersByInitiative(state.charactersIdArray, state.charactersById);
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
          <CharacterList className="characters" characters={characters} addInitiative={this.addInitiative}/>
        </div>
      </div>
    );
  }
}

export default App;
