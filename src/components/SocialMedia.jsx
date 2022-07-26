import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => {
  const linkedin =
    'https://www.linkedin.com/in/mateo-rivera-monsalve-b11a04126/';
  const github = 'https://github.com/MateoRivera';
  return (
    <div className='flex flex-row gap-11'>
      <a href={linkedin}>
        <FaLinkedin color='#FF4A76' fontSize='24px' />
      </a>
      <a href={github}>
        <FaGithub color='#FF4A76' fontSize='24px' />
      </a>
    </div>
  );
};

export default SocialMedia;
