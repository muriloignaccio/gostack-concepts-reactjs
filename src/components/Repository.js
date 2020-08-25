import React from 'react';

export default ({ data, handleRemoveRepository }) => (
  <li>
    {data.title}
    <button onClick={() => handleRemoveRepository(data.id)}>Remover</button>
  </li>
);
