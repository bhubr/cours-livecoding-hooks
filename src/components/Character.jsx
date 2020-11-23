import React, { useState, useEffect } from 'react';

function Character({ characterId }) {
  const [loading, setLoading] = useState(false);
  const [character, setCharacter] = useState({
    name: 'n/a',
    gender: 'n/a',
  });

  useEffect(() => {
    setLoading(true);
    fetch(`https://swapi.dev/api/people/${characterId}/`)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setCharacter(data);
      });
  }, [characterId]);

  return (
    <div>
      {loading && 'Loading'}
      <p>
        {character.name} ({character.gender})
      </p>
    </div>
  );
}

export default Character;
