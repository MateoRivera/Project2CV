import personalData from 'components/static/personalData.json';
import Text from 'components/text/Text';
import React from 'react';

const professionalObjective = () => (
  <Text text={personalData.objetivo_profesional} />
);

export default professionalObjective;
