import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import downloadIcon from '../../assets/icon-downloads.png'
import ratingIcon from '../../assets/icon-ratings.png'
import reviewIcon from '../../assets/icon-review.png'
import { Download } from 'lucide-react';
import { addToStoreDB } from '../../Utility/addToDB';
import {
  BarChart,Bar,XAxis,YAxis,Tooltip,ResponsiveContainer} from "recharts";

  import { ToastContainer, toast } from 'react-toastify';

const AppDetails = () => {
    const {id} = useParams();
    const appId = parseInt(id);
    const data = useLoaderData();
    const singleApp = data.find(app => app.appid === appId); //this line has issues
    // console.log(data);
    const {image,title,companyName,description,size,reviews,ratingAvg,downloads,ratings} = singleApp;

    const [installed, setInstalled] = useState("")

    const handleMarkDownload = id => {
        toast("App Installation Processing")
        addToStoreDB(id)
        setInstalled(!installed)
        
    }

    return (
        <div className='m-6 '>
            <div className='flex'>
                <img className='h-[350px] w-[350px]' src={image} alt="" />
                <div>
                    <h1 className='font-bold text-3xl'>{title}: {description}</h1>
                    <p className='mt-1 text-xl text-gray-500'>Develoved by <span className='text-[#9F62F2]  font-semibold'>{companyName}</span></p>
                    <div className="divider"></div>
                    <div className='flex justify-start gap-12'>
                        <div>
                            <img className='h-[40px] w-[40px]' src={downloadIcon} alt="" />
                            <p className='text-gray-500'>Downloads</p>
                            <h1 className='font-bold text-4xl'>
                                {new Intl.NumberFormat("en-US",{
                                    notation: "compact",
                                }).format(downloads)}
                                </h1>
                        </div>
                        <div>
                            <img className='h-[40px] w-[40px]' src={ratingIcon} alt="" />
                            <p className='text-gray-500 h-[24] w-[150]'>Average Ratings</p>
                            <h1 className='font-bold text-4xl'>{ratingAvg}</h1>
                        </div>
                        <div>
                            <img className='h-[40px] w-[40px]' src={reviewIcon} alt="" />
                            <p className='text-gray-500'>Average Reviews</p>
                            
                            <h1 className='font-bold text-4xl'>{new Intl.NumberFormat("en-US",{
                                    notation: "compact",
                                }).format(reviews)}</h1>
                        </div>
                        
                    </div>
                    <button onClick={()=>handleMarkDownload(id)} className="btn btn-accent w-[250px] h-[52px] mt-3 text-white font-bold text-lg ">{installed?"Installed": `Install Now`}</button> 
                    <ToastContainer />

                </div>
            </div>
            <div className="divider"></div>
            <h1 className='text-2xl font-semibold '>Ratings</h1>
            <div>
            <div className="w-full h-100 bg-white p-4">
            <h2 className="text-lg font-semibold mb-4">Ratings Overview</h2>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={ratings} layout='vertical'>
                <XAxis type='number' />
                <YAxis dataKey="name" type='category' />
                <Tooltip />
                <Bar dataKey="count" fill="#FF8811" barSize={30} />
                </BarChart>
            </ResponsiveContainer>
            </div>
                            </div>
            <div className="divider"></div>
            <h1 className='text-2xl font-semibold '>Description</h1>
            <p className='mt-1 text-xl text-gray-500'>{description}</p>
        </div>
    );
};

export default AppDetails;


// {
//     "appid": 1,
//     "image": "https://img.icons8.com/color/96/chat.png",
//     "title": "ChatPro",
//     "companyName": "TechSoft",
//     "description": "A fast and secure messaging app.",
//     "size": 45,
//     "reviews": 1200,
//     "ratingAvg": 4.5,
//     "downloads": "5M",
//     "ratings": [
//       { "name": "1 star", "count": 20 },
//       { "name": "2 star", "count": 40 },
//       { "name": "3 star", "count": 140 },
//       { "name": "4 star", "count": 400 },
//       { "name": "5 star", "count": 600 }
//     ]
//   }