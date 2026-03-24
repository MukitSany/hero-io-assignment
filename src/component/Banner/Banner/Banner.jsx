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
                <button onClick={() => window.open("https://play.google.com/store/apps")} className='m-2 font-bold flex gap-1 btn btn-primary'><img src={playstoreimg} alt=""/> Google Play</button>
                <button onClick={() => window.open("https://www.apple.com/app-store/")} className='m-2 font-bold flex gap-1 btn btn-primary'><img src={appstoreimg} alt=""/>App Store</button>
            </div>
            <div className='flex justify-center mt-2'>
                <img src={iphoneimf} alt=""/>
            </div>
            <div className='text-center bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-lg h-40'>
              <div className="stats mt-4">
  <div className="stat">
    <div className="stat-figure text-secondary text-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
    </div>
    <div className="stat-title text-white">Total Downloads</div>
    <div className="stat-value ">29.6M</div>
    <div className="stat-desc text-white">21% more than last month</div>
  </div>

  <div className="stat">
    <div className="stat-figure text-secondary text-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
        ></path>
      </svg>
    </div>
    <div className="stat-title text-white">Total Reviews</div>
    <div className="stat-value">906K</div>
    <div className="stat-desc text-white">46% more than last month</div>
  </div>

  <div className="stat">
    <div className="stat-figure text-secondary text-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
        ></path>
      </svg>
    </div>
    <div className="stat-title text-white">Active Apps</div>
    <div className="stat-value text-white">132+</div>
    <div className="stat-desc text-white">31 more will Launch</div>
  </div>
</div>
            </div>
        </div>
    );
};

export default Banner;