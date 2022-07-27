import React from 'react';

const RowCardContainer = ({ lista }) => (
  <tr>
    {lista.map((element) => (
      <td key={element}>{element}</td>
    ))}
  </tr>
);

export default RowCardContainer;
