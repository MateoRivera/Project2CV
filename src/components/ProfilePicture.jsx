import React from 'react';
import foto from 'images/profilePicture.jpg';

const ProfilePicture = () => (
  <div className='p-0.5 bg-white rounded-full w-fit h-fit'>
    <img
      src={foto}
      alt='Foto de Mateo Rivera'
      className='rounded-full w-20 m-0'
    />
  </div>
);

export default ProfilePicture;
