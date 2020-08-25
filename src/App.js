import React, { useState, useEffect } from 'react';

import api from './services/api';
import Repository from './components/Repository';

import './styles.css';

function App() {
  const [repositories, setRepositories] = useState([]);

  async function handleAddRepository() {
    const { data: repository } = await api.post('repositories', {
      title: 'Conceitos React.js',
      url: 'https://github.com',
      techs: ['React.js', 'Node.js'],
    });

    setRepositories([...repositories, repository]);
  }

  async function handleRemoveRepository(id) {
    await api.delete(`repositories/${id}`);

    const updatedRepositories = repositories.filter((repo) => repo.id !== id);

    setRepositories(updatedRepositories);
  }

  useEffect(() => {
    api.get('repositories').then(({ data }) => {
      setRepositories(data);
    });
  }, []);

  return (
    <div>
      <ul data-testid='repository-list'>
        {repositories.map((repository) => (
          <Repository
            key={repository.id}
            data={repository}
            handleRemoveRepository={handleRemoveRepository}
          />
        ))}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
