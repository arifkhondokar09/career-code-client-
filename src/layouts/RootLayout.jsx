
import Navbar from '../pages/Shared/Navbar';

import { Outlet } from 'react-router';
import Footer from '../pages/Shared/Footer';
import { Suspense } from 'react';

const RootLayout = () => {
    return (
        <div className='max-w-7xl mx-auto '>
           
                <Navbar></Navbar>
              
                  <div >
                     
                        <Outlet ></Outlet>
                     
                  </div>
              
              
                <Footer></Footer>
            

        </div>
    );
};

export default RootLayout;