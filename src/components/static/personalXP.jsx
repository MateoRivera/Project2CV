import React from 'react';
import BodyCardContainer from 'components/containers/BigCard/BodyCardContainer';
import personalData from 'components/static/personalData.json';

const personalXP = () => {
  return <BodyCardContainer data={personalData.personalXP} />;
};

export default personalXP;
