import React from 'react';
import playstoreimg from '../../../assets/fi_16076057.png'
import appstoreimg from '../../../assets/fi_5977575.png'

const Banner = () => {
    return (
        <div className='m-6'>
            <h1 className='font-bold text-7xl text-center'>We Build <br /><span className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text'>Productive</span> Apps</h1>
            <p className='text-center text-gray-500 m-4'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />
            Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className='flex justify-center gap-4'>
                <button className='border p-2 m-2 font-bold flex gap-1'><img src={playstoreimg} alt="" srcset="" /> Google Play</button>
                <button className='border p-2 m-2 font-bold flex gap-1'><img src={appstoreimg} alt="" srcset="" />App Store</button>
            </div>
        </div>
    );
};

export default Banner;