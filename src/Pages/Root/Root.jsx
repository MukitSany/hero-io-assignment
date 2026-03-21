import React from 'react';
import Navber from '../../component/Header/Navber';
import { Outlet } from 'react-router';
import Footer from '../../component/Footer/Footer';

const Root = () => {
    return (
        <div className='max-w-7/8 mx-auto'>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;