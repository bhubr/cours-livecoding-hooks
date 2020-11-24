import React, { useState, useEffect } from 'react';

function Character({ characterId }) {
  const [loading, setLoading] = useState(false);
  const [character, setCharacter] = useState({
    name: 'n/a',
    gender: 'n/a',
  });

  useEffect(() => {
    setLoading(true);
    // faire la même chose avec axios:
    // https://since1979.dev/cancel-axios-request-to-prevent-react-from-yelling-at-you/
    const controller = new AbortController;
    const { signal } = controller;
    fetch(`https://swapi.dev/api/people/${characterId}/`, { signal })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setCharacter(data);
      });

    return () => {
      controller.abort();
    };
  }, [characterId]);


  useEffect(() => {

    const handleClick = () => {
      console.log('click');
    };
    // met en place un event listener à l'insertion
    document.addEventListener('click', handleClick);

    // renvoie une fonction qui sera appelée au moment
    // où le composant sera démonté de la page.
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

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
