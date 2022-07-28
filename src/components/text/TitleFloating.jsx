import React from 'react';
import Title from 'components/text/Title';

const TitleFloating = ({ title }) => {
  return (
    <div className='bg-secondary rounded-lg text-white px-6 py-0.5 w-full md:text-center'>
      <Title title={title} />
    </div>
  );
};

export default TitleFloating;
