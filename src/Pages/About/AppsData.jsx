import React from 'react';
import { useLoaderData } from 'react-router';
import App from '../App/App';

const AppsData = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div className='m-4'>
            <h1 className='font-bold text-5xl text-center'>Your Installed Apps</h1>
                            <p className='text-center text-gray-500 m-4'>Explore All Trending Apps on the Market developed by us</p>
                            <div className='flex justify-between'>
                                <h1 className='text-2xl font-semibold '>{data.length} Apps Found</h1>
                            <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" required placeholder="Search" />
</label>
                            </div>
            
            <div>
            <div className="grid lg:grid-cols-4 gap-4 m-9 grid-cols-1">
      {data.map((singleApp) => (
        <App key={singleApp.appid} singleApp={singleApp} />
      ))}
    </div>
        </div>
        </div>
    );
};

export default AppsData;