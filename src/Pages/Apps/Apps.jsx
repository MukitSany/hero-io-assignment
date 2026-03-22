import React, { Suspense, useEffect, useState } from 'react';
import App from '../App/App';

const Apps = ({data}) => {
    const [allApps, setAllApps] = useState([]);
    
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
            <Suspense fallback={<span>Loading....</span>}>
                {
                    data.map((singleApp)=><App key={singleApp.id} singleApp={singleApp}></App>)
                }
            </Suspense>
        </div>
    );
};

export default Apps;