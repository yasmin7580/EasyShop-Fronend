import React from 'react';
import Navbar from '../Components/SharedComponents/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/SharedComponents/Footer';

const Root = () => {
    return (
        <div className='min-h-dvh flex flex-col'>
            <Navbar></Navbar>
            <div className='flex-1'>
                  <Outlet></Outlet>
            </div>
          
            <Footer></Footer>
           
            
        </div>
    );
};

export default Root;