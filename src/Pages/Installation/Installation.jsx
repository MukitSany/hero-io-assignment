import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getAvailableApp } from '../../Utility/addToDB';
import AppCart from '../AppCart/AppCart';
import downmenu from '../../assets/teenyicons_down-solid.png'

const Installation = () => {

    const data = useLoaderData();
    // console.log(data)
    const [appList, setAppList]=useState([])
    const [sort, setSort]=useState("")

    useEffect(() => {

        
        const storeAppData = getAvailableApp();
        // console.log(storeAppData);
         const convertedStoreApp=storeAppData.map(id=> parseInt(id))
        //  console.log(convertedStoreApp);
        const myInstallList=data.filter(app=>convertedStoreApp.includes(app.appid));
        // console.log(myInstallList);
        setAppList(myInstallList)
    },[])

    const handleSort = (type) => {
        setSort(type)
        if (type ==="Download") {
            const sortByDownload =[...appList].sort((a,b)=>b.downloads - a.downloads);
            setAppList(sortByDownload)
        }
        if (type ==="Ratings") {
            const sortByRatings =[...appList].sort((a,b)=>b.ratingAvg - a.ratingAvg);
            setAppList(sortByRatings)
        }
    }

    const removeFromCart = id =>{
    console.log('remove item', id);
}

    return (
        <div>
            <div className='m-4'>
                <h1 className='font-bold text-5xl text-center'>Your Installed Apps</h1>
                <p className='text-center text-gray-500 m-4'>Explore All Trending Apps on the Market developed by us</p>
                <div className='flex justify-between'>
                    <h1 className='text-2xl font-semibold '>{appList.length} Apps Found</h1>
                <details className="dropdown">
                <summary className="btn m-1">Sort By {sort?sort:""} <img src={downmenu} alt="" /></summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a onClick={()=>handleSort("Download")}>Download</a></li>
                             <li><a onClick={()=>handleSort("Ratings")}>Ratings</a></li>
                    </ul>
                </details>
                </div>

                {
                    appList.map(a=> <AppCart key={a.appid} singleApp={a}></AppCart>)
                }
            </div>
        </div>
    );
};

export default Installation;