import BodyCardContainer from 'components/containers/BigCard/BodyCardContainer';
import React from 'react';
import personalData from 'components/static/personalData.json';

const education = () => <BodyCardContainer data={personalData.courses} />;

export default education;
