import BodyCardContainer from 'components/containers/BodyCardContainer';
import React from 'react';
import personalData from 'components/static/personalData.json';

const education = () => <BodyCardContainer data={personalData.education} />;

export default education;
