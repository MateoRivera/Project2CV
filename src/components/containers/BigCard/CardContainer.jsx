import Title from 'components/text/Title';
import React from 'react';

const CardContainer = ({ title, body: Body }) => (
  <div className='bg-white rounded-2xl flex flex-col py-5 gap-1 md:text-center'>
    <div className='bg-secondary px-6 py-0.5 text-white'>
      <Title title={title} />
    </div>
    <div className='px-6'>
      <Body />
    </div>
  </div>
);

export default CardContainer;
