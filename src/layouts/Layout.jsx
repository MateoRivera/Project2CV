import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => (
  <div className='w-full h-screen flex flex-col justify-between'>
    <Navbar />
    <div className='h-full bg-gris overflow-scroll'>
      <Outlet />
    </div>
    <Footer />
  </div>
);

export default Layout;
