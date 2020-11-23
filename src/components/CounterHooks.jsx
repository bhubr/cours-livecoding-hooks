import React, { useState } from 'react';

function CounterHooks() {
  const [count, setCount] = useState(0);

  // 1ere façon : passer à setCount la nouvelle valeur
  const increment = () => setCount(count + 1);
  // 2ème façon : passer à setCount un callback qui prend
  // en entrée l'ancienne valeur
  // const increment = () => setCount(prevCount => prevCount + 1);

  return (
    <button type="button" onClick={increment}>
      {count}
    </button>
  );
}

export default CounterHooks;
