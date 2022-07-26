import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ProfilePicture from 'components/ProfilePicture';

const Navbar = () => {
  const linkedin =
    'https://www.linkedin.com/in/mateo-rivera-monsalve-b11a04126/';
  const github = 'https://github.com/MateoRivera';
  return (
    <nav className='bg-primary flex flex-row px-4 py-5 rounded-b-lg justify-center gap-5 items-center lg:gap-16'>
      <ProfilePicture />
      <div className='flex flex-col items-center gap-3'>
        <div className='flex flex-col items-center'>
          <span className='text-white title'>Mateo Rivera</span>
          <span className='text-gray content'>mateo.rivera@udea.edu.co</span>
          <span className='text-gray content text-center'>
            Estudiante de Ingeniería de sistemas
          </span>
        </div>

        <div className='flex flex-row gap-11'>
          <a href={linkedin}>
            <FaLinkedin color='#FF4A76' fontSize='24px' />
          </a>
          <a href={github}>
            <FaGithub color='#FF4A76' fontSize='24px' />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
