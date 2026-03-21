import React from 'react';
import playstoreimg from '../../../assets/fi_16076057.png'
import appstoreimg from '../../../assets/fi_5977575.png'
import iphoneimf from '../../../assets/Iphone.png'

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
            <div className='flex justify-center mt-2'>
                <img src={iphoneimf} alt="" srcset="" />
            </div>
            <section className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white py-16 rounded-2xl">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Trusted By Millions, Built For You
        </h2>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Item 1 */}
          <div>
            <p className="text-sm opacity-80 mb-2">Total Downloads</p>
            <h3 className="text-4xl md:text-5xl font-bold mb-2">29.6M</h3>
            <p className="text-sm opacity-80">21% More Than Last Month</p>
          </div>

          {/* Item 2 */}
          <div>
            <p className="text-sm opacity-80 mb-2">Total Reviews</p>
            <h3 className="text-4xl md:text-5xl font-bold mb-2">906K</h3>
            <p className="text-sm opacity-80">46% More Than Last Month</p>
          </div>

          {/* Item 3 */}
          <div>
            <p className="text-sm opacity-80 mb-2">Active Apps</p>
            <h3 className="text-4xl md:text-5xl font-bold mb-2">132+</h3>
            <p className="text-sm opacity-80">31 More Will Launch</p>
          </div>

        </div>
      </div>
    </section>
        </div>
    );
};

export default Banner;