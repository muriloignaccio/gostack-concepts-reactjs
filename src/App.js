import React, { useState, useEffect } from 'react';

import api from './services/api';

import './styles.css';

function App() {
  const [repositories, setRepositories] = useState([]);

  async function handleAddRepository() {}

  async function handleRemoveRepository(id) {}

  useEffect(() => {
    api.get('repositories').then(({ data }) => {
      console.log(data);
      setRepositories(data);
    });
  }, []);

  return (
    <div>
      <ul data-testid='repository-list'>
        {repositories.map(({ id, title }) => (
          <li key={id}>
            {title}
            <button onClick={() => handleRemoveRepository(id)}>Remover</button>
          </li>
        ))}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
