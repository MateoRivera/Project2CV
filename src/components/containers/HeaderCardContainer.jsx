import Subtitle from 'components/text/Subtitle';
import React from 'react';

const HeaderCardContainer = ({ head }) => {
  return (
    <>
      {head.map((element) => (
        <td key={element}>
          <Subtitle subtitle={element} />
        </td>
      ))}
    </>
  );
};

export default HeaderCardContainer;
