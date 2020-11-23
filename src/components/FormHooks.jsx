import React, { useState } from 'react';

function FormHooks() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <form>
      <label htmlFor="name">
        Your name
        <input
          id="name"
          type="text"
          placeholder="John Doe"
          value={name}
          onChange={event => setName(event.target.value)}
        />
      </label>
      <label htmlFor="email">
        Your email
        <input
          id="email"
          type="email"
          placeholder="johndoe@domain.com"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
      </label>
    </form>
  );
}

export default FormHooks;
