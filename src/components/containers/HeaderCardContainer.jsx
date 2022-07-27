import Subtitle from 'components/text/Subtitle';
import React from 'react';

const HeaderCardContainer = ({ head }) => {
  return (
    <tr>
      {head.map((element) => (
        <th key={element} className='w-1/3'>
          <Subtitle subtitle={element} />
        </th>
      ))}
    </tr>
  );
};

export default HeaderCardContainer;
