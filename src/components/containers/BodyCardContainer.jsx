import React from 'react';
import RowCardContainer from 'components/containers/RowCardContainer';
import HeaderCardContainer from 'components/containers/HeaderCardContainer';

const BodyCardContainer = ({ data }) => {
  const rows = [];
  Object.keys(data).forEach((key) =>
    rows.push(<RowCardContainer lista={data[key]} />)
  );

  return (
    <table className='md:items-center'>
      <tr className='hidden md:block'>
        <HeaderCardContainer head={data.title} />
      </tr>
      {rows.slice(1)}
    </table>
  );
};

export default BodyCardContainer;
