import React from 'react';

const RowCardContainer = ({ lista }) => (
  <tr>
    {lista.map((element, i) =>
      i === 0 ? (
        <td
          key={element}
          className='text-center  border-b-2 border-tertiary font-bold'
        >
          {element}
        </td>
      ) : i === 1 ? (
        <td key={element} className='text-center  border-b-2 border-tertiary'>
          {element}
        </td>
      ) : (
        <td
          key={element}
          className='text-center  border-b-2 border-tertiary italic'
        >
          {element}
        </td>
      )
    )}
  </tr>
);

export default RowCardContainer;
