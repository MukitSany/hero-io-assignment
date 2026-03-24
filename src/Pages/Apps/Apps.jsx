import React, { Suspense, useEffect, useState } from 'react';
import App from '../App/App';
import { Link } from 'react-router';

const Apps = ({data}) => {
    // const [allApps, setAllApps] = useState([]);
    
    // useEffect(() => {
    //     fetch("appsData.json")
    //     .then(res => res.json())
    //     .then(data => {
    //         setAllApps(data)
    //     })
    // },[])

    // const appPromise = fetch('./appsData.json').then(res=>res.json())
    // console.log(appPromise);

    return (
        <div>
            <div>
                <h1 className='font-bold text-5xl text-center'>Trending Apps</h1>
                <p className='text-center text-gray-500 m-4'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <Suspense fallback={<progress className="progress w-56"></progress>}>
                <div className='grid lg:grid-cols-4 gap-4 m-9 grid-cols-1'>
                    {
                    data.slice(0, 20).map((singleApp)=><App key={singleApp.appid} singleApp={singleApp}></App>)
                }
                </div>
            </Suspense>
            <div className='text-center m-4'>
                <Link to="/apps">
                <button className="btn btn-soft btn-primary">Show More</button>
            </Link>
            </div>
        </div>
    );
};

export default Apps;