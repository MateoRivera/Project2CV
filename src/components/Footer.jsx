import React from 'react';
import SocialMedia from 'components/SocialMedia';

const Footer = () => (
  <footer className='bg-primary flex flex-col items-center justify-center py-6 gap-4'>
    <div className='flex flex-col items-center'>
      <span className='text-white content'>
        Carrera 56 # 63 A 31 - Itagüí - Antioquia
      </span>
      <span className='text-white content'>mateo.rivera@udea.edu.co</span>
    </div>

    <SocialMedia />
  </footer>
);

export default Footer;
