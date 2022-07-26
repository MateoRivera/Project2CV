import Title from 'components/text/Title';
import React from 'react';

const CardContainer = ({ title, body }) => {
  return (
    <div className='bg-white rounded-2xl flex flex-col py-5 gap-1'>
      <div className='bg-secondary px-6 py-0.5'>
        <Title title={title} />
      </div>
      <div className='mx-6 text-justify'>{body}</div>
    </div>
  );
};

export default CardContainer;
