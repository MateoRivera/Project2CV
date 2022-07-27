import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => (
  <div className='h-screen flex flex-col justify-between'>
    <Navbar />
    <div className='overflow-scroll'>
      <div className='bg-gray'>
        <Outlet />
      </div>
      <Footer />
    </div>
  </div>
);

export default Layout;
