import React from 'react';
import RowCardContainer from 'components/containers/BigCard/RowCardContainer';
import HeaderCardContainer from 'components/containers/BigCard/HeaderCardContainer';

const BodyCardContainer = ({ data }) => {
  const rows = [];
  Object.keys(data).forEach((key) =>
    rows.push(<RowCardContainer lista={data[key]} />)
  );

  return (
    <table className='table-auto w-full border-separate border-spacing-y-3'>
      <thead className=''>
        <HeaderCardContainer head={data.title} />
      </thead>
      <tbody>{rows.slice(1)}</tbody>
    </table>
  );
};

export default BodyCardContainer;
