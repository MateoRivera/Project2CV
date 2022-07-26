import React from 'react';
import ProfilePicture from 'components/ProfilePicture';
import Title from 'components/text/Title';

const Navbar = () => (
  <nav className='bg-primary flex px-4 py-5 rounded-b-lg justify-center gap-5 items-center lg:gap-16'>
    <ProfilePicture />
    <div className='flex flex-col items-center gap-3'>
      <div className='flex flex-col items-center'>
        <Title title='Mateo Rivera' />
        <span className='text-gray content'>mateo.rivera@udea.edu.co</span>
        <span className='text-gray content text-center'>
          Estudiante de Ingeniería de sistemas
        </span>
      </div>
    </div>
  </nav>
);

export default Navbar;
