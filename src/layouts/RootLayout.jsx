
import Navbar from '../pages/Shared/Navbar';

import { Outlet } from 'react-router';
import Footer from '../pages/Shared/Footer';

const RootLayout = () => {
    return (
        <div className='max-w-7xl mx-auto '>
           
                <Navbar></Navbar>
              
                  <Outlet ></Outlet>
              
                <Footer></Footer>
            

        </div>
    );
};

export default RootLayout;