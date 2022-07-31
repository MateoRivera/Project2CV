import React from 'react';
import Subtitle from 'components/text/Subtitle';

const HobbieCardContainer = ({ title, body }) => {
  return (
    <div className='bg-white rounded-2xl flex flex-col p-4 gap-1 w-64'>
      <Subtitle subtitle={title} />
      <span>{body}</span>
    </div>
  );
};

export default HobbieCardContainer;
