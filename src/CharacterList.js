import React from 'react';
import Character from './Character';

export const CharacterList = ({
  characters,
  addInitiative
}) => (
  <ul>
    {characters.map(character =>
      <Character
        key={character.id}
        id={character.id}
        character={character}
        addInitiative={addInitiative}
      />
    )}
  </ul>
);