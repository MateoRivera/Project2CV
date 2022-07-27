import Title from 'components/text/Title';
import React from 'react';

const HeaderCardContainer = ({ head }) => {
  return (
    <>
      {head.map((element) => (
        <td key={element}>
          <Title title={element} />
        </td>
      ))}
    </>
  );
};

export default HeaderCardContainer;
