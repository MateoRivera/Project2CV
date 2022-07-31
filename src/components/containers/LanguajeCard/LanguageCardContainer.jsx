import React from 'react';
import Subtitle from 'components/text/Subtitle';

const LanguageCardContainer = ({ title, body }) => {
  return (
    <div className='bg-white flex flex-col p-4 gap-1 rounded-full items-center w-36'>
      <Subtitle subtitle={title} />
      <span>{body}</span>
    </div>
  );
};

export default LanguageCardContainer;
